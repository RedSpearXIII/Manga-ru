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
      const { data } = await publicHttp.post("/auth/register", fields)
      setState({ isSuccess: true })
    } catch (e) {
      setState({ authError: "Ошибка при авторизации" })
    } finally {
      setState({ isLoading: false })
    }
  },
}))
