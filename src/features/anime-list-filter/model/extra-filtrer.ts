import { createEvent, createStore } from "effector"

type State = {
  isOpened: boolean
}

const initialState: State = {
  isOpened: false,
}

export const setIsOpened = createEvent<boolean>()

export const $extraFilterStore = createStore(initialState).on(
  setIsOpened,
  (state, payload) => ({ ...state, isOpened: payload })
)
