import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type State = {
  searchQuery: string
  status: any //TODO: Доработать типы
  orderBy: "random" | "popular" | "views" | null
}

type Actions = {
  setSearchQuery: (queryString: string) => void
  setStatus: (status: any | null) => void
  setOrderBy: (payload: "random" | "popular" | "views" | null) => void
  resetFilter: () => void
}

type Store = State & Actions

const initialState: State = {
  orderBy: null,
  status: null,
  searchQuery: "",
}

export const useMangaListFilterStore = create(
  immer<Store>((setState) => ({
    ...initialState,
    setSearchQuery: (queryString) =>
      setState((store) => {
        store.searchQuery = queryString
      }),
    setStatus: (status) =>
      setState((store) => {
        store.status = status
      }),
    setOrderBy: (value) =>
      setState((store) => {
        store.orderBy = value
      }),
    resetFilter: () => setState(initialState),
  }))
)
