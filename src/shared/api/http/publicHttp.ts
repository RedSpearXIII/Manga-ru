import axios from "axios"
import { API_URL } from "../../config"

export const publicHttp = axios.create({
  baseURL: API_URL,
})
