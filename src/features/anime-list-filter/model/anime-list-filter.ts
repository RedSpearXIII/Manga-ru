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
  genres: { id: string; genre: string }[]
  season: AnimeSeasons | null
  ratingMpa: AnimeRatingMpa | null
  minimalAge: AnimeMinimalAge | null
}

type Actions = {
  setSearchQuery: (queryString: string) => void
  setStatus: (status: AnimeStatuses | null) => void
  setOrderBy: (payload: AnimeOrderVariants | null) => void
  addGenre: (genre: { id: string; genre: string }) => void
  removeGenre: (genreId: string) => void
  setSeason: (value: AnimeSeasons | null) => void
  setRatingMpa: (value: AnimeRatingMpa | null) => void
  setMinimalAge: (value: AnimeMinimalAge | null) => void
  resetFilter: () => void
}

export type Store = State & Actions

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
    addGenre: (genre) =>
      setState((store) => {
        const candidate = store.genres.find((el) => el.id === genre.id)
        if (!candidate) store.genres.push(genre)
      }),
    removeGenre: (genreId) =>
      setState((store) => {
        store.genres = store.genres.filter((genre) => genre.id !== genreId)
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
