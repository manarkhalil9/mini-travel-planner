import { useState } from "react"
import { SignInUser } from "../services/auth"
import { useNavigate } from "react-router-dom"

const SignIn = ({ setUser }) => {
  let navigate = useNavigate()
  const initialState = {
    email: "",
    password: "",
  }

  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const userData = await SignInUser(form)
    setForm(initialState)
    setUser(userData)
    navigate("/")

  }

  return (
    <div className="auth">
      <div className="container">
        <div className="auth__card">
          <h1 className="auth__title">Sign in</h1>
          <p className="auth__sub">Continue planning your next trip.</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="email">Email</label>
              <input
                className="input"
                name="email"
                type="email"
                placeholder="you@example.com"
                onChange={handleChange}
                value={form.email}
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="password">Password</label>
              <input
                className="input"
                name="password"
                type="password"
                placeholder="••••••••"
                onChange={handleChange}
                value={form.password}
              />
            </div>

            <button className="btn" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn
