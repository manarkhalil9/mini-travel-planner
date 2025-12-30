import { useState } from "react"
import { RegisterUser } from "../services/auth"
import { useNavigate } from "react-router-dom"

const SignUp = () => {
  const navigate = useNavigate()

  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Optional validation (safe guard)
    if (!form.email || !form.password) return
    if (form.password !== form.confirmPassword) return

    await RegisterUser(form)
    setForm(initialState)
    navigate("/signin")
  }

  return (
    <div className="auth">
      <div className="container">
        <div className="auth__card">
          <h1 className="auth__title">Create account</h1>
          <p className="auth__sub">Save trips, add plans, and leave comments.</p>

          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label className="label" htmlFor="name">Name</label>
              <input
                className="input"
                name="name"
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="email">Email</label>
              <input
                className="input"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="password">Password</label>
              <input
                className="input"
                name="password"
                type="password"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label className="label" htmlFor="confirmPassword">Confirm password</label>
              <input
                className="input"
                name="confirmPassword"
                type="password"
                placeholder="Repeat your password"
                value={form.confirmPassword}
                onChange={handleChange}
              />
            </div>

            <button
              className="btn"
              type="submit"
              disabled={
                !form.email ||
                !form.password ||
                form.password !== form.confirmPassword
              }
            >
              Create account
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
