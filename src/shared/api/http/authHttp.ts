import axios from "axios"
import { API_URL } from "../../config"

export const authHttp = axios.create({
  baseURL: API_URL,
})

authHttp.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken") || ""

  config.headers.Authorization = `Bearer ${accessToken}`
  return config
})

authHttp.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config
  }
)
