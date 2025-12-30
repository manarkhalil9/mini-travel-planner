import { useEffect, useMemo, useState } from "react"
import { GetAttractions } from "../services/attractionServices"
import CityCards from "../components/CityCards"

const Cities = () => {
  const [allAttractions, setAllAttractions] = useState([])

  useEffect(() => {
    const fetchAllAttractions = async () => {
      const dbAttractions = await GetAttractions()
      setAllAttractions(dbAttractions)
    }
    fetchAllAttractions()
  }, [])

  const cities = useMemo(() => {
    const cityMap = new Map()

    allAttractions.forEach((attraction) => {
      const key = `${attraction.country}|${attraction.city}`

      if (!cityMap.has(key)) {
        cityMap.set(key, {
          city: attraction.city,
          country: attraction.country,
          picture: attraction.picture,
        })
      }
    })

    return Array.from(cityMap.values())
  }, [allAttractions])

  return (
    <section className="page">
      <div className="container">
      <div className="cities__header">
        <div>
          <h1 className="page__title">Cities</h1>
          <p className="page__subtitle">
            Pick a city to explore the attractions inside it.
          </p>
        </div>
        <span className="badge">{cities.length} cities</span>
      </div>

      <div className="grid grid--cards">
        {cities.map((c) => (
          <CityCards
            key={`${c.country}|${c.city}`}
            city={c.city}
            country={c.country}
            picture={c.picture}
          />
        ))}
      </div>
          </div>
    </section>
  )
}

export default Cities
