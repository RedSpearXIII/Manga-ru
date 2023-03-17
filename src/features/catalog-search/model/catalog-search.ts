import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type State = {
  query: string
  searchOpen: boolean
}

type Actions = {
  setQuery: (queryString: string) => void
  toggleSearchOpen: () => void
}

type Store = State & Actions

export const useCatalogSearchStore = create(
  immer<Store>((setState) => ({
    query: "",
    searchOpen: false,
    setQuery: (payload) =>
      setState((store) => {
        store.query = payload
      }),
    toggleSearchOpen: () =>
      setState((store) => {
        store.searchOpen = !store.searchOpen
      }),
  }))
)
