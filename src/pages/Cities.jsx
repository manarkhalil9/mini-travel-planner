import { useEffect, useMemo, useState } from "react";
import { GetAttractions } from "../services/attractionServices";
import CityCards from "../components/CityCards";

const Cities = () => {
  const [allAttractions, setAllAttractions] = useState([])

  useEffect(()=> {
    const fetchAllAttractions = async () => {
      const dbAttractions = await GetAttractions()
      setAllAttractions(dbAttractions)

    }
    fetchAllAttractions()
  }, [])


  const createCities = useMemo(()=> {
    const cityMap = new Map()

    allAttractions.forEach((attraction)=> {
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
    <div className="page">
      <div className="container">
        <div className="page__head">
          <div>
            <h1 className="page__title">Cities</h1>
            <p className="page__sub">Pick a city to explore attractions and add them to your trip plan.</p>
          </div>
          <div className="pill">{createCities.length} available</div>
        </div>

        <div className="city-grid">
          {createCities.map((c) => (
            <CityCards
              key={`${c.country}|${c.city}`}
              city={c.city}
              country={c.country}
              picture={c.picture}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cities
