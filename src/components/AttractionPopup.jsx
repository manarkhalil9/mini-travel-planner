const AttractionPopup = ({ attraction, onClose, addToTrip }) => {


  return (
    <div className="popup" onClick={onClose}>
      <div className="popup__card" onClick={(e) => e.stopPropagation()}>
        <div className="popup__head">
          <h2 className="popup__title">{attraction.name}</h2>
          <button className="btn btn--ghost" onClick={onClose}>Close</button>
        </div>

        <div className="popup__grid">
          <div>
            <p className="popup__text">{attraction.description}</p>
            <div className="popup__meta">
              <span>{attraction.city}</span>
              <span>•</span>
              <span>{attraction.country}</span>
            </div>

            {!addToTrip && (
              <p className="muted popup__note">
                Sign in to add this attraction to your trip plan.
              </p>
            )}

            {addToTrip && (
              <button className="btn" onClick={() => addToTrip(attraction)}>
                Add to trip
              </button>
            )}
          </div>

          <div className="popup__media">
            <img className="popup__img" src={attraction.picture} alt={attraction.name} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttractionPopup
