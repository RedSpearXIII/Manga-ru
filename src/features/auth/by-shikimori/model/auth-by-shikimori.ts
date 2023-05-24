import { createEffect, createEvent, createStore, sample } from "effector"
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
const redirectUser = createEvent<string>()

export const $authByShikimori = createStore<State>(initialState).on(
  redirectUser,
  (state, payload) => {
    window.location.href = payload
  }
)

sample({
  clock: loginFx.doneData,
  fn: (redirectUrl) => redirectUrl,
  target: redirectUser,
})
