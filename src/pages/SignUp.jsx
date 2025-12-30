import { useState } from "react"
import { RegisterUser } from "../services/auth"
import { useNavigate, Link } from "react-router-dom"

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
    await RegisterUser(form)
    setForm(initialState)
    navigate("/signin")
  }

  return (
    <section className="auth">
      <div className="card auth-card">
        <h1 className="page__title">Create your account</h1>
        <p className="page__subtitle">Save trips, build plans, and keep everything in one place.</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label className="label" htmlFor="name">Name</label>
            <input
              className="input"
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="email">Email</label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="password">Password</label>
            <input
              className="input"
              id="password"
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Create a password"
            />
          </div>

          <div className="field">
            <label className="label" htmlFor="confirmPassword">Confirm password</label>
            <input
              className="input"
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Repeat your password"
            />
          </div>

          <button
            className="btn btn--primary"
            type="submit"
            disabled={
              !form.email ||
              !form.password ||
              form.password !== form.confirmPassword
            }
          >
            Sign up
          </button>

          <p className="helper">
            Already have an account? <Link to="/signin"><strong>Sign in</strong></Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default SignUp
