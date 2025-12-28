import { Link } from "react-router-dom"

const Nav = ({ user, handleLogOut }) => {
  const userOnly = () => {
    return (
      <div>
        <h1>hi {user.name} </h1>
        <Link onClick={handleLogOut} to="/">
          Sign Out
        </Link>
      </div>
    )
  }

  const guests = () => {
    return (
      <div>
        <Link to="/register">Sign Up</Link>
        <Link to="/signin">Sign In</Link>
      </div>
    )
  }

  return <nav>{user ? userOnly() : guests()}</nav>
}

export default Nav
