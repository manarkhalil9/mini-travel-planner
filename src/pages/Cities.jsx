import { useEffect, useMemo, useState } from "react";
import { GetAttractions } from "../services/attractionServices";
import { useNavigate } from "react-router-dom";
import CityCards from "../components/CityCards";

const Cities = () => {
  const [allAttractions, setAllAttractions] = useState([])
  const navigate = useNavigate()

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
    <div>
      <h1>Cities</h1>
      <p>cities count: {createCities.length}</p>
      {createCities.map((c) => (
    <CityCards
    key={`${c.country}|${c.city}`}
    city={c.city}
    country={c.country}
    picture={c.picture}
  />
      ))}
    </div>
  )
}

export default Cities
