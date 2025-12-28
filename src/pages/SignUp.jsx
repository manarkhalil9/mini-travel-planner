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
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter Your Name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter Your Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          disabled={
            !form.email ||
            !form.password ||
            form.password !== form.confirmPassword
          }
        >
          Sign Up
        </button>
      </form>
    </div>
  )
}

export default SignUp
