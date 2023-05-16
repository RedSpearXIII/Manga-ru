import { create } from "zustand"
import { LoginFields } from "../ui"
import { publicHttp } from "~shared/api"

type State = {
  loginError: null | string
  isSuccess: boolean | null
}
type Actions = {
  login: (fields: LoginFields) => Promise<void>
  resetState: () => void
}
type Store = State & Actions

const initialState: State = {
  loginError: null,
  isSuccess: null,
}

export const useLoginStore = create<Store>((setState) => ({
  ...initialState,
  resetState: () => setState(initialState),
  login: async (fields) => {
    try {
      setState({ loginError: null })
      const response = await publicHttp.post("/auth/login", fields)
      response.headers["set-cookie"]?.forEach((cookie) => {
        document.cookie = cookie
      })
      setState({ isSuccess: true })
    } catch (e) {
      if (e instanceof Error) {
        // @ts-ignore
        const error = e.response.data.error
        setState({ loginError: error })
      }
    }
  },
}))
