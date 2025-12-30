import { useState } from "react"
import { SignInUser } from "../services/auth"
import { useNavigate, Link } from "react-router-dom"

const SignIn = ({ setUser }) => {
  const navigate = useNavigate()

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
    const payload = await SignInUser(form)
    setUser(payload)
    setForm(initialState)
    navigate("/cities")
  }

  return (
    <section className="auth">
      <div className="card auth-card">
        <h1 className="page__title">Welcome back</h1>
        <p className="page__subtitle">Sign in to save plans and manage your trips.</p>

        <form className="form" onSubmit={handleSubmit}>
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
              placeholder="Your password"
            />
          </div>

          <button className="btn btn--primary" type="submit">Sign in</button>

          <p className="helper">
            New here? <Link to="/register"><strong>Create an account</strong></Link>
          </p>
        </form>
      </div>
    </section>
  )
}

export default SignIn
