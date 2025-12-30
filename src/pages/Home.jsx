import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__inner">
          <p className="hero__kicker">Plan happy trips, fast.</p>
          <h1 className="hero__title">Build your itinerary with hand‑picked attractions.</h1>
          <p className="hero__subtitle">
            Browse cities, discover attractions, then save them into your trip plan — one click at a time.
          </p>
          <div className="hero__actions">
            <Link className="btn" to="/cities">Explore Cities</Link>
            <Link className="btn btn--ghost" to="/plan">View Trips</Link>
          </div>
          <div className="hero__stats">
            <div className="stat"><div className="stat__num">Cities</div><div className="stat__label">curated list</div></div>
            <div className="stat"><div className="stat__num">Attractions</div><div className="stat__label">with details</div></div>
            <div className="stat"><div className="stat__num">Trips</div><div className="stat__label">saved plans</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <h2 className="section__title">How it works</h2>
            <p className="section__sub">A simple flow that matches your wireframe.</p>
          </div>
          <div className="grid3">
            <div className="feature">
              <div className="feature__badge">1</div>
              <h3 className="feature__title">Choose a city</h3>
              <p className="feature__text">Pick from the city list on the Cities page.</p>
            </div>
            <div className="feature">
              <div className="feature__badge">2</div>
              <h3 className="feature__title">Open attractions</h3>
              <p className="feature__text">See the attractions for that city and expand details.</p>
            </div>
            <div className="feature">
              <div className="feature__badge">3</div>
              <h3 className="feature__title">Save into a trip</h3>
              <p className="feature__text">Add items to your plan and view everything under Trips.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
