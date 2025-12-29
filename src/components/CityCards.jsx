import { useNavigate } from "react-router-dom"

const CityCards = ({city, country, picture}) => {

const navigate = useNavigate()

const handleClick = () => {
  navigate(`/cities/${encodeURIComponent(city)}`)
}

  return (
    <div onClick={handleClick}>
      <p>
        {city}
        {country}
      </p>
      <img src={picture} alt="attraction" width={500}/>
    </div>
  )
}

export default CityCards
