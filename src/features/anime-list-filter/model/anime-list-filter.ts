import { create } from "zustand"
import { immer } from "zustand/middleware/immer"
import {
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeStatuses,
  AnimeTranslation,
  AnimeTypeVariants,
} from "~shared/api"

type State = {
  searchQuery: string
  status: AnimeStatuses | null
  orderBy: AnimeOrderVariants | null
  genres: { id: string; genre: string }[]
  season: AnimeSeasons | null
  ratingMpa: AnimeRatingMpa | null
  minimalAge: AnimeMinimalAge | null
  type: AnimeTypeVariants | null
  years: string[]
  translations: AnimeTranslation[]
}

type Actions = {
  setSearchQuery: (queryString: string) => void
  setStatus: (status: AnimeStatuses | null) => void
  setOrderBy: (payload: AnimeOrderVariants | null) => void
  addGenre: (genre: { id: string; genre: string }) => void
  setGenres: (genres: { id: string; genre: string }[]) => void
  removeGenre: (genreId: string) => void
  setYears: (years: string[]) => void
  addYear: (year: string) => void
  removeYear: (year: string) => void
  setSeason: (value: AnimeSeasons | null) => void
  setRatingMpa: (value: AnimeRatingMpa | null) => void
  setMinimalAge: (value: AnimeMinimalAge | null) => void
  setType: (value: AnimeTypeVariants | null) => void
  setTranslations: (value: AnimeTranslation[]) => void
  removeTranslation: (value: number) => void
  addTranslation: (translation: AnimeTranslation) => void
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
  type: null,
  years: [],
  translations: [],
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
    setGenres: (genres) =>
      setState((store) => {
        store.genres = genres
      }),
    addYear: (year) =>
      setState((store) => {
        const candidate = store.years.find((value) => value === year)
        if (!candidate) store.years.push(year)
      }),
    removeYear: (year) =>
      setState((store) => {
        store.years = store.years.filter((value) => value !== year)
      }),
    setYears: (years) =>
      setState((store) => {
        store.years = years
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
    setType: (type) =>
      setState((store) => {
        store.type = type
      }),
    addTranslation: (translation) =>
      setState((store) => {
        const candidate = store.translations.find(
          (el) => el.id === translation.id
        )
        if (!candidate) store.translations.push(translation)
      }),
    removeTranslation: (translationId) =>
      setState((store) => {
        store.translations = store.translations.filter(
          (translation) => translation.id !== translationId
        )
      }),
    setTranslations: (genres) =>
      setState((store) => {
        store.translations = genres
      }),
    resetFilter: () => setState(initialState),
  }))
)
