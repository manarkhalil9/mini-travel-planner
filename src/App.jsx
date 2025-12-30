import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { CheckSession } from "./services/auth"

import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import Nav from "./components/Nav"
import Cities from "./pages/Cities"
import AttractionDetails from "./pages/AttractionDetails"
import Trip from "./pages/Trip"

const App = () => {
  const [user, setUser] = useState(null)
  const [plans, setPlans] = useState([])

  const checkToken = async () => {
    const userData = await CheckSession()
    setUser(userData)
  }

  const handleLogOut = () => {
    setUser(null)
    localStorage.clear()
  }

  useEffect(() => {
    const token = localStorage.getItem("token")

    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="app">
      <Nav user={user} handleLogOut={handleLogOut} />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/signin" element={<SignIn setUser={setUser} />} />

          <Route path="/cities" element={<Cities />} />
          <Route
            path="/cities/:attraction"
            element={<AttractionDetails user={user} plans={plans} setPlans={setPlans} />}
          />
          <Route
            path="/plan"
            element={<Trip user={user} plans={plans} setPlans={setPlans} />}
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
