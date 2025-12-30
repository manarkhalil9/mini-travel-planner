const AttractionCards = ({ onClick, attraction }) => {
  return (
    <div className="attraction-card" onClick={() => onClick(attraction)}>
      <p>{attraction.name}</p>
      <img src={attraction.picture} alt={attraction.name} />
    </div>
  )
}

export default AttractionCards
