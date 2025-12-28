import { useState, useEffect } from "react"
import { RegisterUser } from "../services/auth"

const SignUp = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const [form, setForm] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser(form)
    setForm(initialState)
  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter Your Name"
              onChange={handleChange}
              value={form.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={form.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={form.password}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              value={form.confirmPassword}
            />
          </div>
          <button
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
    </>
  )
}

export default SignUp
