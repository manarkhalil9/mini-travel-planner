import { Link } from "react-router-dom"

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <div className="hero">
          <div className="card hero__panel">
            <span className="badge">Plan • Save • Explore</span>
            <h1 className="hero__headline">Build a trip you’ll actually enjoy.</h1>
            <p className="hero__lead">
              Pick a city, browse attractions, then save your favorites to your trip plan.
              Keep it simple, keep it fun.
            </p>

            <div className="hero__actions">
              <Link className="btn btn--primary" to="/cities">Browse cities</Link>
              <Link className="btn btn--secondary" to="/plan">Open my trip</Link>
            </div>

            <p className="helper">
              Tip: Start in <strong>Cities</strong>, pick a city, then add attractions to your trip.
            </p>
          </div>

          <aside className="card hero__side">
            <div className="stat">
              <span className="stat__dot" />
              <div>
                <p className="stat__title">Curated places</p>
                <p className="stat__desc">Attractions come from your dataset, so it’s fast and consistent.</p>
              </div>
            </div>
            <div className="stat">
              <span className="stat__dot" />
              <div>
                <p className="stat__title">One click details</p>
                <p className="stat__desc">Tap an attraction to see its description and photo.</p>
              </div>
            </div>
            <div className="stat">
              <span className="stat__dot" />
              <div>
                <p className="stat__title">Trip plans</p>
                <p className="stat__desc">Add notes and organize what you want to do.</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Home
