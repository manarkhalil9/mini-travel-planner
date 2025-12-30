import { Link } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  const userOnly = () => (
    <div className="nav__right">
      <div className="nav__user">Welcome, {user.name}</div>
      <Link className="nav__link" to="/cities">Cities</Link>
      <Link className="nav__link" to="/plan">Trips</Link>
      <Link className="nav__btn" onClick={handleLogOut} to="/">Sign out</Link>
    </div>
  )

  const guests = () => (
    <div className="nav__right">
      <Link className="nav__link" to="/cities">Cities</Link>
      <Link className="nav__link" to="/plan">Trips</Link>
      <Link className="nav__btn" to="/signin">Sign in</Link>
      <Link className="nav__btn nav__btn--ghost" to="/register">Create account</Link>
    </div>
  )

  return (
    <nav className="nav">
      <div className="container nav__inner">
        <Link className="nav__brand" to="/">
          <img className="nav__logo" src="/favicon.svg" alt="Mini Travel Planner" />
          <span className="nav__name">Mini Travel Planner</span>
        </Link>
        {user ? userOnly() : guests()}
      </div>
    </nav>
  )
}

export default Nav
