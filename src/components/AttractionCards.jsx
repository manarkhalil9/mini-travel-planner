const AttractionCards = ({onClick, attraction}) => {
  return (
    <div className="attraction-card" onClick={() => onClick(attraction)}>
      <p>{attraction.name}</p>
    </div>
  )
}

export default AttractionCards
