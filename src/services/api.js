import axios from "axios"

export const BASE_URL = "http://localhost:3000/"

const Client = axios.create({
  baseURL: BASE_URL
})

// Intercepts every request axios makes
Client.interceptors.request.use(
  async (config) => {
    // Reads the token in localStorage
    const token = localStorage.getItem("token")
    // if the token exists, we set the authorization header
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`

    }
    // We return the new config if the token exists or the default config if no token exists.
    return config
  },
  async (error) => {
    console.log({ msg: "Axios Interceptor Error!", error })
    throw error
  }
)

export default Client
