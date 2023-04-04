import {
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeStatuses,
  AnimeTypeVariants,
} from "~shared/api"

export type GetAnimeByIdParams = {
  id: string
}

export type AnimeDetailingResponse = {
  id: string
  title: string
  image: string
  studio: { id: string; studio: string }[]
  season: AnimeSeasons
  description: string
  otherTitles: string[]
  year: number
  releasedAt: string
  airedAt: string
  type: AnimeTypeVariants
  episodesCount: number
  genres: { id: string; genre: string }[]
  status: AnimeStatuses
  ratingMpa: AnimeRatingMpa
  minimalAge: number
}
