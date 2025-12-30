import { Link } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <Link className="nav__brand" to="/">
          <img className="nav__logo" src="/favicon.svg" alt="Mini Travel Planner" />
          <span className="nav__title">Mini Travel Planner</span>
        </Link>

        <nav className="nav__links">
          <Link className="nav__link" to="/cities">Cities</Link>
          <Link className="nav__link" to="/plan">My Trip</Link>

          {user ? (
            <>
              <span className="nav__link">Hi, {user.name}</span>
              <Link className="nav__link" to="/" onClick={handleLogOut}>Sign out</Link>
            </>
          ) : (
            <>
              <Link className="nav__link" to="/signin">Sign in</Link>
              <Link className="btn btn--primary" to="/register">Create account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Nav
