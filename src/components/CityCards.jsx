import { useNavigate } from "react-router-dom"

const CityCards = ({ city, country, picture }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/cities/${encodeURIComponent(city)}`)
  }

  return (
    <article className="card city-card" onClick={handleClick} role="button" tabIndex={0}>
      <img className="city-card__image" src={picture} alt={`${city}`} />
      <div className="city-card__body">
        <h3 className="city-card__name">{city}</h3>
        <div className="city-card__meta">
          <span>{country}</span>
          <span className="badge">Explore</span>
        </div>
      </div>
    </article>
  )
}

export default CityCards
