import { createEvent, createStore } from "effector"

export type State = {
  id: string
  username: string
  email: string
}

export const setViewer = createEvent<State>()

export const $viewer = createStore<State>({} as State).on(
  setViewer,
  (state, payload) => payload
)
