import { useNavigate } from "react-router-dom"

const CityCards = ({city, country, picture}) => {

const navigate = useNavigate()

const handleClick = () => {
  navigate(`/cities/${encodeURIComponent(city)}`)
}

  return (
    <div className="city-card" onClick={handleClick} role="button" tabIndex={0}>
      <div className="city-card__media">
        <img className="city-card__img" src={picture} alt={`${city} city`} />
        <div className="city-card__overlay" />
      </div>
      <div className="city-card__body">
        <div className="city-card__title">{city}</div>
        <div className="city-card__meta">{country}</div>
        <div className="city-card__hint">Explore attractions</div>
      </div>
    </div>
  )
}

export default CityCards
