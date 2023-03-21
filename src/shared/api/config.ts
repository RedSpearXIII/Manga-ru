import axios from "axios"
import { API_URL } from "../config"

export const publicApi = axios.create({
  baseURL: API_URL,
  timeout: 5000,
})

export const authApi = axios.create({
  baseURL: API_URL,
  timeout: 5000,
})
