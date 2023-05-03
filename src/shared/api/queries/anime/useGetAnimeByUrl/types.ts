import {
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeStatuses,
  AnimeTypeVariants,
} from "~shared/api"

export type GetAnimeByIdParams = {
  animeUrl: string
}

export type AnimeDetailingResponse = {
  url: string
  title: string
  image: string
  studio?: { id: string; studio: string }[]
  season: AnimeSeasons
  description?: string
  otherTitles: string[]
  year?: number
  releasedAt?: string
  airedAt: string
  type: AnimeTypeVariants
  episodesCount?: number
  episodesCountAired?: number
  genres: { id: string; genre: string }[]
  status: AnimeStatuses
  ratingMpa: AnimeRatingMpa
  minimalAge: number
  linkPlayer: string
  accentColor?: string
}
