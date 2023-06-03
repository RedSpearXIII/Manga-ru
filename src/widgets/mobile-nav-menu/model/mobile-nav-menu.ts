import { createEvent, createStore } from "effector"

type State = {
  isOpened: boolean
}

const initialState: State = {
  isOpened: false,
}

export const setIsOpen = createEvent<boolean>()

export const $mobileNavMenu = createStore<State>(initialState).on(
  setIsOpen,
  (state, payload) => ({ ...state, isOpened: payload })
)
