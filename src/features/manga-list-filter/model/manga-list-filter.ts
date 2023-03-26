import { create } from "zustand"
import { MangaStatus } from "~shared/api"
import { immer } from "zustand/middleware/immer"

type State = {
  searchQuery: string
  status: MangaStatus | null
  orderBy: "random" | "popular" | "views" | null
}

type Actions = {
  setSearchQuery: (queryString: string) => void
  setStatus: (status: MangaStatus | null) => void
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
