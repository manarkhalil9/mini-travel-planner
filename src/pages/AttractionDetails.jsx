import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetAttractions } from "../services/attractionServices"


const AttractionDetails = () => {
  const navigate = useNavigate()

  const {attraction} = useParams()
  const decodedAttraction = decodeURIComponent(attraction)

  const [allAttractions, setAllAttractions] = useState()

  useEffect(()=> {
    const fetchAllAttractions = async () => {
      const dbAttractions = await GetAttractions()
      setAllAttractions(dbAttractions)

    }
    fetchAllAttractions()
  }, [])


  const cityAttractions = useMemo(()=> {
    return allAttractions.filter((a) => a.city === decodedAttraction)
  }, [allAttractions, decodedAttraction])


  return (
    <div>
      <h1>
        {decodedAttraction}
      </h1>
      <p>
        Attraction Count : {cityAttractions.length}
      </p>

{cityAttractions.map((a) => (
        <div key={a._id}>
          <p>{a.name}</p>
        </div>
      ))}
    </div>
  )
}

export default AttractionDetails
