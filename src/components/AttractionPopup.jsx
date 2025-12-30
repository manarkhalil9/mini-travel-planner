const AttractionPopup = ({attraction, onClose}) => {
    if (!attraction) return null

    const handleAddToTrip = () => {
        console.log('added to trip:', attraction)
    }

    return (
        <div>
            <button onClick={onClose}>Close</button>

            <h2>{attraction.name}</h2>
            <p>{attraction.description}</p>
            <img src={attraction.picture} alt={attraction.name} />
            <p>Country: {attraction.country}</p>

            <button onClick={handleAddToTrip}>Add to Trip</button>
        </div>
    )
}

export default AttractionPopup