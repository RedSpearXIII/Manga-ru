import axios from "axios"
import { API_URL } from "../../config"

const accessToken = localStorage.getItem("accessToken") || ""

export const authHttp = axios.create({
  baseURL: API_URL,
})

authHttp.interceptors.request.use((config) => {
  config.headers.Authorization = accessToken
  return config
})
