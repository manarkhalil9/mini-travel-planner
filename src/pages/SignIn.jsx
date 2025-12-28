import { useState } from "react"
import { SignInUser } from "../services/auth"

const SignIn = ({ setUser }) => {
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
              placeholder="example@example.com"
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
