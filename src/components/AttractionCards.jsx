const AttractionCards = ({onClick, attraction}) => {
  return (
    <div onClick={onClick}>
      <p>{attraction.name}</p>
    </div>
  )
}

export default AttractionCards
