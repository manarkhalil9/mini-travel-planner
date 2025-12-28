import { useState, useEffect } from "react"
import { RegisterUser } from "../services/auth"

const SignUp = () => {
  const initialState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  }

  const [formValues, setFormValues] = useState(initialState)

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser(formValues)
    setFormValues(initialState)
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
              value={formValues.name}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
              value={formValues.email}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={formValues.password}
            />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              value={formValues.confirmPassword}
            />
          </div>
          <button
            disabled={
              !formValues.email ||
              !formValues.password ||
              formValues.password !== formValues.confirmPassword
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
