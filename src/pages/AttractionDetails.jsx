import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetAttractions } from "../services/attractionServices"
import AttractionCards from "../components/AttractionCards"
import AttractionPopup from "../components/AttractionPopup"

const AttractionDetails = () => {
  const navigate = useNavigate()
  const { city } = useParams()
  const decodedCity = decodeURIComponent(city)

  const [allAttractions, setAllAttractions] = useState([])
  const [plans, setPlans] = useState([])
  const [selectedAttraction, setSelectedAttraction] = useState(null)

  useEffect(() => {
    const fetchAllAttractions = async () => {
      const dbAttractions = await GetAttractions()
      setAllAttractions(dbAttractions)
    }
    fetchAllAttractions()
  }, [])

  const attractionsInCity = useMemo(() => {
    return allAttractions.filter((a) => a.city === decodedCity)
  }, [allAttractions, decodedCity])

  const cityMeta = useMemo(() => {
    const first = attractionsInCity[0]
    if (!first) return null
    return {
      city: first.city,
      country: first.country,
      picture: first.picture,
    }
  }, [attractionsInCity])

  const addToTrip = (attraction) => {
    const newPlan = {
      _id: Date.now(),
      day: plans.length + 1,
      notes: "",
      attraction: attraction,
    }
    setPlans((prev) => [...prev, newPlan])
  }

  return (
    <section className="page">
      <div className="container">
      <div className="city-hero">
        <div>
          <button className="btn btn--secondary" type="button" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>

        {cityMeta && (
          <div className="city-hero__media">
            <img src={cityMeta.picture} alt={cityMeta.city} />
          </div>
        )}

        <div className="cities__header">
          <div>
            <h1 className="page__title">{decodedCity}</h1>
            <p className="page__subtitle">
              Tap an attraction to see details. You can add it to your trip plan.
            </p>
          </div>

          {cityMeta && <span className="badge">{cityMeta.country}</span>}
        </div>
      </div>

      <div className="attractions__list grid">
        {attractionsInCity.map((a) => (
          <AttractionCards
            key={a._id}
            attraction={a}
            onClick={(picked) => setSelectedAttraction(picked)}
          />
        ))}
      </div>

      {selectedAttraction && (
        <AttractionPopup
          attraction={selectedAttraction}
          onClose={() => setSelectedAttraction(null)}
          addToTrip={addToTrip}
        />
      )}
          </div>
    </section>
  )
}

export default AttractionDetails
