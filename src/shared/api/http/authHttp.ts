import axios from "axios"
import { API_URL } from "../../config"

export const authApi = axios.create({
  baseURL: API_URL,
})
