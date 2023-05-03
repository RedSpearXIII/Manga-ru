import { create } from "zustand"
import { AuthByLocalFields } from "../ui"
import { publicHttp } from "~shared/api"

type AuthByLocalParams = Omit<AuthByLocalFields, "repeatPassword">

type State = {
  authError: null | string
  isLoading: boolean
  isSuccess: boolean | null
  fromUrl: string | null
}
type Actions = {
  authByLocal: (fields: AuthByLocalParams) => Promise<void>
  resetState: () => void
}
type Store = State & Actions

const initialState: State = {
  authError: null,
  isLoading: false,
  fromUrl: null,
  isSuccess: null,
}

export const useAuthByLocalStore = create<Store>((setState) => ({
  ...initialState,
  resetState: () => setState(initialState),
  authByLocal: async (fields) => {
    try {
      setState({ authError: null, isLoading: true })
      const response = await publicHttp.post("/auth/register", fields)
      response.headers["set-cookie"]?.forEach((cookie) => {
        document.cookie = cookie
      })
      setState({ isSuccess: true })
    } catch (e) {
      if (e instanceof Error) {
        // @ts-ignore
        const error = e.response.data.error
        setState({ authError: error })
      }
    } finally {
      setState({ isLoading: false })
    }
  },
}))
