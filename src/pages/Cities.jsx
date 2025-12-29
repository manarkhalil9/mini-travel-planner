import { useEffect, useState } from "react";
import { GetAttractions } from "../services/attractionServices";

const Cities = () => {
  const [allAttractions, setAllAttractions] = useState()

  useEffect(()=> {
    const fetchAllAttractions = async () => {
      const dbAttractions = await GetAttractions()
      setAllAttractions(dbAttractions)
    }
    fetchAllAttractions()
  }, [])

  return (
    <div>
      <h1>Cities</h1>
      <li>
        <p>
          Attractions: {allAttractions.length}
        </p>
      </li>
    </div>
  )
}

export default Cities
