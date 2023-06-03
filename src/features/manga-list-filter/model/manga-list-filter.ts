import { createEvent, createStore } from "effector"

type State = {
  searchQuery: string
}

const initialState: State = {
  searchQuery: "",
}

export const setSearchQuery = createEvent<{ queryString: string }>()
export const resetFilter = createEvent()

export const $mangaListFilter = createStore<State>(initialState)
  .on(setSearchQuery, (state, payload) => ({
    ...state,
    searchQuery: payload.queryString,
  }))
  .on(resetFilter, () => initialState)

export const $filterIsActive = $mangaListFilter.map(
  (state) => state.searchQuery
)
export const $searchQuery = $mangaListFilter.map((state) => state.searchQuery)
