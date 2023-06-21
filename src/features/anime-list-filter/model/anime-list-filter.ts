import {
  AnimeGenre,
  AnimeMinimalAge,
  AnimeOrderVariants,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeStatuses,
  AnimeTranslation,
  AnimeTypeVariants,
  getAnimeGenres,
  getAnimeStudios,
  getAnimeTranslation,
  getAnimeYears,
} from "~shared/api"
import { createEvent, createStore } from "effector"

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
  studio: string | null
}

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
  studio: null,
}

export const setSearchQuery = createEvent<{ queryString: string }>()
export const setStatus = createEvent<{ status: AnimeStatuses | null }>()
export const setOrderBy = createEvent<{ orderBy: AnimeOrderVariants | null }>()
export const addGenre = createEvent<{ genre: AnimeGenre }>()
export const setGenres = createEvent<{ genres: AnimeGenre[] }>()
export const removeGenre = createEvent<{ genreId: string }>()
export const setYears = createEvent<{ years: string[] }>()
export const addYear = createEvent<{ year: string }>()
export const removeYear = createEvent<{ year: string }>()
export const setSeason = createEvent<{ season: AnimeSeasons | null }>()
export const setRatingMpa = createEvent<{ ratingMpa: AnimeRatingMpa | null }>()
export const setMinimalAge = createEvent<{
  minimalAge: AnimeMinimalAge | null
}>()
export const setType = createEvent<{ type: AnimeTypeVariants | null }>()
export const setTranslations = createEvent<{
  translations: AnimeTranslation[]
}>()
export const removeTranslation = createEvent<{ translationId: number }>()
export const addTranslation = createEvent<{ translation: AnimeTranslation }>()
export const setStudio = createEvent<{ studio: string | null }>()
export const resetFilter = createEvent()

export const $animeListFilter = createStore(initialState)
  .on(setSearchQuery, (state, payload) => ({
    ...state,
    searchQuery: payload.queryString,
  }))
  .on(setStatus, (state, { status }) => ({ ...state, status }))
  .on(setOrderBy, (state, { orderBy }) => ({ ...state, orderBy }))
  .on(addGenre, (state, payload) => {
    const candidate = state.genres.find((el) => el.id === payload.genre.id)
    if (candidate) return state
    return { ...state, genres: [...state.genres, payload.genre] }
  })
  .on(removeGenre, (state, payload) => ({
    ...state,
    genres: state.genres.filter((genre) => genre.id !== payload.genreId),
  }))
  .on(setGenres, (state, { genres }) => ({ ...state, genres }))
  .on(addYear, (state, payload) => {
    const candidate = state.years.find((year) => year === payload.year)
    if (candidate) return state
    return { ...state, years: [...state.years, payload.year] }
  })
  .on(removeYear, (state, payload) => ({
    ...state,
    years: state.years.filter((year) => year !== payload.year),
  }))
  .on(setYears, (state, { years }) => ({ ...state, years }))
  .on(setSeason, (state, { season }) => ({ ...state, season }))
  .on(setRatingMpa, (state, { ratingMpa }) => ({ ...state, ratingMpa }))
  .on(setMinimalAge, (state, { minimalAge }) => ({ ...state, minimalAge }))
  .on(setMinimalAge, (state, { minimalAge }) => ({ ...state, minimalAge }))
  .on(setType, (state, { type }) => ({ ...state, type }))
  .on(addTranslation, (state, payload) => {
    const candidate = state.translations.find(
      (el) => el.id === payload.translation.id
    )
    if (!candidate) return state
    return {
      ...state,
      translations: [...state.translations, payload.translation],
    }
  })
  .on(removeTranslation, (state, payload) => ({
    ...state,
    translations: state.translations.filter(
      (translation) => translation.id !== payload.translationId
    ),
  }))
  .on(setTranslations, (state, { translations }) => ({
    ...state,
    translations,
  }))
  .on(setStudio, (state, payload) => ({
    ...state,
    studio: payload.studio,
  }))
  .on(resetFilter, () => initialState)

export const $filterIsActive = $animeListFilter.map(
  (state) =>
    state.orderBy ||
    state.status ||
    state.searchQuery ||
    state.ratingMpa ||
    state.studio ||
    state.season ||
    state.type ||
    state.minimalAge !== null ||
    state.genres.length > 0 ||
    state.years.length > 0 ||
    state.translations.length > 0
)

export const $orderBy = $animeListFilter.map((state) => state.orderBy)
export const $status = $animeListFilter.map((state) => state.status)
export const $searchQuery = $animeListFilter.map((state) => state.searchQuery)
export const $ratingMpa = $animeListFilter.map((state) => state.ratingMpa)
export const $studio = $animeListFilter.map((state) => state.studio)
export const $genres = $animeListFilter.map((state) => state.genres)
export const $season = $animeListFilter.map((state) => state.season)
export const $type = $animeListFilter.map((state) => state.type)
export const $minimalAge = $animeListFilter.map((state) => state.minimalAge)
export const $years = $animeListFilter.map((state) => state.years)
export const $translations = $animeListFilter.map((state) => state.translations)

getAnimeYears.start()
getAnimeStudios.start()
getAnimeGenres.start()
getAnimeTranslation.start()
