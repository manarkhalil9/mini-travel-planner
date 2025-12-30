import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import {
  GetAttractions,
  GetAttractionById,
} from "../services/attractionServices"
import AttractionCards from "../components/AttractionCards"
import AttractionPopup from "../components/AttractionPopup"
import { CreatePlan } from "../services/tripPlanServices"

const AttractionDetails = ({ plans, setPlans }) => {
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
      const planData = {
        attraction: attraction._id, // send ID here
        day: plans.length + 1,
        notes: "",
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
    <div>
      <h1>{decodedAttraction}</h1>
      <p>Attraction Count : {cityAttractions.length}</p>

      {cityAttractions.map((a) => (
        <AttractionCards
          key={a._id}
          attraction={a}
          onClick={setSelectedAttraction}
        />
      ))}

      {selectedAttraction && (
        <AttractionPopup
          attraction={selectedAttraction}
          onClose={() => setSelectedAttraction(null)}
          addToTrip={addToTrip}
        />
      )}
    </div>
  )
}

export default AttractionDetails
