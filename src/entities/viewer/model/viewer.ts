import { createStore } from "effector"
import { setUser } from "./events"

export type State = {
  id: string
  username: string
  email: string
}

const $viewer = createStore<State>({} as State).on(
  setUser,
  (state, payload) => payload
)
