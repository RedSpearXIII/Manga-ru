import { create } from "zustand"
import { MangaStatus } from "~shared/api"
import { immer } from "zustand/middleware/immer"

type State = {
  searchQuery: string
  status: MangaStatus | null
  orderBy: "random" | "popular" | "views" | null
  genres: string[]
}

type Actions = {
  setSearchQuery: (queryString: string) => void
  setStatus: (status: MangaStatus | null) => void
  setOrderBy: (payload: "random" | "popular" | "views" | null) => void
  resetFilter: () => void
  setGenres: (genres: string[]) => void
}

type Store = State & Actions

const initialState: State = {
  orderBy: null,
  status: null,
  searchQuery: "",
  genres: [],
}

export const useAnimeListFilterStore = create(
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
    setGenres: (genres) =>
      setState((store) => {
        store.genres = genres
      }),
  }))
)
