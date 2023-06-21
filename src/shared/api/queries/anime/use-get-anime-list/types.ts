export type AnimeMinimalAge = 18 | 16 | 12 | 6 | 0
export type AnimeRatingMpa = "PG" | "PG-13" | "R" | "R+" | "G"
export type AnimeSeasons = "Winter" | "Spring" | "Summer" | "Fall"
export type AnimeStatuses = "released" | "ongoing"
export type AnimeOrderVariants = "random" | "popular" | "views"
export type AnimeTypeVariants =
  | "movie"
  | "ona"
  | "ova"
  | "music"
  | "special"
  | "tv"

export type AnimeResponse = {
  url: string
  title: string
  image: string
  studio?: {
    id: string
    studio: string
  }[]
  season: AnimeSeasons
  episodesCount?: number
  genres?: { id: string; genre: string }[]
  status: AnimeStatuses
  ratingMpa?: AnimeRatingMpa
  accentColor?: string
  year?: number
  type?: AnimeTypeVariants
  minimalAge?: AnimeMinimalAge
}

export type GetAnimeParams = {
  pageSize?: number
  searchQuery?: string
  minimalAge?: AnimeMinimalAge | null
  ratingMpa?: AnimeRatingMpa | null
  status?: AnimeStatuses | null
  season?: AnimeSeasons | null
  genres?: string[] | null
  order?: AnimeOrderVariants | null
  type?: AnimeTypeVariants | null
  years?: string[] | null
  translations?: string[] | null
  studio?: string | null
}
