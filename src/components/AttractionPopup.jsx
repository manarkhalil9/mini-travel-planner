const AttractionPopup = ({ attraction, onClose, addToTrip }) => {

  
  return (
    <div className="popup">
      <div className="popup-content">

        <h2>{attraction.name}</h2>
        <p>{attraction.description}</p>
        <p>City: {attraction.city}</p>
        <p>Country: {attraction.country}</p>
        <img src={attraction.picture} alt={attraction.name} />

        <button onClick={onClose}>Close</button>

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
