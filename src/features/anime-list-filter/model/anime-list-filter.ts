import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import {
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeStatuses,
} from "~shared/api"

type State = {
  searchQuery: string
  status: AnimeStatuses | null
  orderBy: AnimeOrderVariants | null
  genres: string[]
  season: AnimeSeasons | null
  ratingMpa: AnimeRatingMpa | null
  minimalAge: AnimeMinimalAge | null
}

type Actions = {
  setSearchQuery: (queryString: string) => void
  setStatus: (status: AnimeStatuses | null) => void
  setOrderBy: (payload: AnimeOrderVariants | null) => void
  setGenres: (genres: string[]) => void
  setSeason: (value: AnimeSeasons | null) => void
  setRatingMpa: (value: AnimeRatingMpa | null) => void
  setMinimalAge: (value: AnimeMinimalAge | null) => void
  resetFilter: () => void
}

type Store = State & Actions

const initialState: State = {
  orderBy: null,
  status: null,
  searchQuery: "",
  genres: [],
  minimalAge: null,
  ratingMpa: null,
  season: null,
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
    setGenres: (genres) =>
      setState((store) => {
        store.genres = genres
      }),
    setSeason: (season) =>
      setState((store) => {
        store.season = season
      }),
    setRatingMpa: (rating) =>
      setState((store) => {
        store.ratingMpa = rating
      }),
    setMinimalAge: (ageValue) =>
      setState((store) => {
        store.minimalAge = ageValue
      }),
    resetFilter: () => setState(initialState),
  }))
)
