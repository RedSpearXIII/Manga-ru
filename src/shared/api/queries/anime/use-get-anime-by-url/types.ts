import {
  AnimeGenre,
  AnimeRatingMpa,
  AnimeSeasons,
  AnimeStatuses,
  AnimeStudio,
  AnimeTypeVariants,
} from "~shared/api"

export type GetAnimeByIdParams = {
  animeUrl: string
}

export type AnimeDetailingResponse = {
  url: string
  title: string
  image: string
  studio?: AnimeStudio[]
  season: AnimeSeasons
  description?: string
  otherTitles: string[]
  year?: number
  releasedAt?: string
  airedAt: string
  type?: AnimeTypeVariants
  episodesCount?: number
  episodesCountAired?: number
  genres?: AnimeGenre[]
  status: AnimeStatuses
  ratingMpa: AnimeRatingMpa
  minimalAge: number
  linkPlayer: string
  accentColor?: string
  rating?: number
}
