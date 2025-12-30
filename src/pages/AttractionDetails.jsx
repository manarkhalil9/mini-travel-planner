import { useEffect, useMemo, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetAttractions } from "../services/attractionServices"
import AttractionCards from "../components/AttractionCards"
import AttractionPopup from "../components/AttractionPopup"


const AttractionDetails = () => {
  const navigate = useNavigate()

  const {attraction} = useParams()
  const decodedAttraction = decodeURIComponent(attraction)

  const [allAttractions, setAllAttractions] = useState([])
  const [selectedAttraction, setSelectedAttraction] = useState(null)

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
  <AttractionCards
    key={a._id}
    attraction={a}
    onClick={setSelectedAttraction}
  />
      ))}

      <AttractionPopup 
      attraction={selectedAttraction}
      onClose={() => setSelectedAttraction(null)}
      />

    </div>
  )
}

export default AttractionDetails
