const AttractionCards = ({ onClick, attraction, picture }) => {
  return (
    <div onClick={onClick}>
      <p>{attraction.name}</p>
      <img src={attraction.picture} alt="attraction" width={500} />
    </div>
  )
}

export default AttractionCards
