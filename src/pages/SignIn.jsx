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
    <>
      <div>
        <form onSubmit={handleSubmit}>
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
          <button>Sign In</button>
        </form>
      </div>
    </>
  )
}

export default SignIn
