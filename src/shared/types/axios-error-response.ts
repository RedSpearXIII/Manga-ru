import { AxiosError } from "axios"

export type AxiosErrorResponse<T> = AxiosError<{ error: T }>
