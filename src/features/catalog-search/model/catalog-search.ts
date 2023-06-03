import { createEvent, createStore } from "effector"

type State = {
  query: string
  searchIsOpen: boolean
}

const initialState: State = {
  query: "",
  searchIsOpen: false,
}

export const setQuery = createEvent<string>()
export const toggleSearchOpen = createEvent()

export const $catalogSearch = createStore<State>(initialState)
  .on(setQuery, (state, payload) => ({ ...state, query: payload }))
  .on(toggleSearchOpen, (state) => ({
    ...state,
    searchIsOpen: !state.searchIsOpen,
  }))
