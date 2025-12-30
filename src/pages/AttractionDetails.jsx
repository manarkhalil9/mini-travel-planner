import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  GetAttractions,
  GetAttractionById,
} from "../services/attractionServices"
import AttractionCards from "../components/AttractionCards"
import AttractionPopup from "../components/AttractionPopup"
import { CreatePlan } from "../services/tripPlanServices"

const AttractionDetails = ({ user,plans, setPlans }) => {
  const navigate = useNavigate()

  const { attraction } = useParams()
  const decodedAttraction = decodeURIComponent(attraction)

  const [allAttractions, setAllAttractions] = useState([])

  const [selectedAttraction, setSelectedAttraction] = useState(null)

  useEffect(() => {
    const fetchAllAttractions = async () => {
      const dbAttractions = await GetAttractions()
      setAllAttractions(dbAttractions)
    }
    fetchAllAttractions()
  }, [])

  const cityAttractions = useMemo(() => {
    return allAttractions.filter((a) => a.city === decodedAttraction)
  }, [allAttractions, decodedAttraction])

  const addToTrip = async (attraction) => {
    try {
      const sampleNotes = [
        "Must visit!",
        "Take lots of pictures.",
        "Check opening hours.",
        "Try local food nearby.",
        "Bring comfortable shoes.",
        "Perfect for sunset views.",
        "Could skip if short on time.",
      ]
      const random = sampleNotes[Math.floor(Math.random() * sampleNotes.length)]

      const planData = {
        attraction: attraction._id, // send ID here
        day: plans.length + 1,
        notes: random,
      }

      const addedPlan = await CreatePlan(planData)

      // Update local state with the plan returned from backend
      setPlans((prev) => [...prev, addedPlan])

      alert(`${attraction.name} added to your trip!`)
    } catch (error) {
      console.error("Failed to add plan:", error)
      alert("Failed to add attraction to your trip.")
    }
  }

  return (
    <div className="page">
      <div className="container">
        <div className="page__head">
          <div>
            <h1 className="page__title">{decodedAttraction}</h1>
            <p className="page__sub">Choose an attraction to see details, then add it to your trip plan.</p>
          </div>
          <div className="page__actions">
            <button className="btn btn--ghost" onClick={() => navigate("/cities")}>Back to cities</button>
            <div className="pill">{cityAttractions.length} attractions</div>
          </div>
        </div>

        <div className="attraction-grid">
          {cityAttractions.map((a) => (
            <AttractionCards
              key={a._id}
              attraction={a}
              onClick={setSelectedAttraction}
            />
          ))}
        </div>

        {selectedAttraction && (
          <AttractionPopup
            attraction={selectedAttraction}
            onClose={() => setSelectedAttraction(null)}
            addToTrip={user ? addToTrip : null}
          />
        )}
      </div>
    </div>
  )
}

export default AttractionDetails
