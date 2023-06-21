import { createEffect, createEvent, createStore } from "effector"
import { publicHttp } from "~shared/api"

type State = {
  authError: null | string
}

const initialState: State = {
  authError: null,
}

export const loginFx = createEffect<void, string>(async () => {
  const response = await publicHttp.get<string>("/auth/shikimori/login")
  return response.data
})

export const saveTokens = createEvent<{
  accessToken: string
  refreshToken: string
}>()

export const $authByShikimori = createStore<State>(initialState).on(
  saveTokens,
  (state, payload) => {
    localStorage.setItem("accessToken", payload.accessToken)
    localStorage.setItem("refreshToken", payload.refreshToken)
  }
)
