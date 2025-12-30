const AttractionPopup = ({ attraction, onClose, addToTrip }) => {

  
  return (
    <div className="popup">
      <div className="popup-content">
        <button onClick={onClose}>Close</button>

        <h2>{attraction.name}</h2>
        <p>{attraction.description}</p>
        <p>City: {attraction.city}</p>
        <p>Country: {attraction.country}</p>
        <img src={attraction.picture} alt={attraction.name} />

        {addToTrip && (
          <button onClick={() => addToTrip(attraction)}>
            Add to Trip
          </button>
        )}
      </div>
    </div>
  )
}

export default AttractionPopup
