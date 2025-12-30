const AttractionCards = ({ onClick, attraction, picture }) => {
  return (
    <div className="attraction-card" onClick={() => onClick(attraction)}>
      <p>{attraction.name}</p>
      <img src={attraction.picture} alt="attraction" width={500} />
    </div>
  )
}

export default AttractionCards
