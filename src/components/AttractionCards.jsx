const AttractionCards = ({ onClick, attraction }) => {
  return (
    <div className="attraction-card" onClick={() => onClick(attraction)} role="button" tabIndex={0}>
      <div className="attraction-card__media">
        <img className="attraction-card__img" src={attraction.picture} alt={attraction.name} />
      </div>
      <div className="attraction-card__body">
        <div className="attraction-card__title">{attraction.name}</div>
        <div className="attraction-card__meta">{attraction.city}, {attraction.country}</div>
      </div>
    </div>
  )
}

export default AttractionCards
