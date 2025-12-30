const AttractionPopup = ({ attraction, onClose, addToTrip }) => {
  if (!attraction) return null

  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <div className="popup__header">
          <h2 className="popup__title">{attraction.name}</h2>
          <button className="popup__close" type="button" onClick={onClose}>
            Close
          </button>
        </div>

        <div className="popup__grid">
          <div>
            <img className="popup__img" src={attraction.picture} alt={attraction.name} />
            <p className="popup__desc">{attraction.description}</p>
          </div>

          <div className="popup__meta">
            <span className="badge">{attraction.city}</span>
            <span className="badge">{attraction.country}</span>

            {addToTrip && (
              <div className="popup__actions">
                <button className="btn btn--primary" type="button" onClick={() => addToTrip(attraction)}>
                  Add to trip
                </button>
                <button className="btn btn--ghost" type="button" onClick={onClose}>
                  Keep browsing
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AttractionPopup
