import "./App.css"
import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import { CheckSession } from "./services/auth"

import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

const App = () => {
  const [user, setUser] = useState(null)

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
    <>
      <main>
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
    </>
  )
}

export default App
