const AttractionCards = ({ onClick, attraction }) => {
  return (
    <article className="card attraction-card" onClick={() => onClick(attraction)} role="button" tabIndex={0}>
      <img src={attraction.picture} alt={attraction.name} />
      <div className="attraction-card__content">
        <h3 className="attraction-card__title">{attraction.name}</h3>
        <p className="attraction-card__sub">
          {attraction.city}, {attraction.country}
        </p>
      </div>
    </article>
  )
}

export default AttractionCards
