import axios from "axios"
import { API_URL } from "../../config"

export const authHttp = axios.create({
  baseURL: API_URL,
})
