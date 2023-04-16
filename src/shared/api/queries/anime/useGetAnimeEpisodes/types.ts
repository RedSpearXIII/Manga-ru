import { AnimeTranslation } from "~shared/api"

export type getAnimeEpisodesParams = {
  animeId: string
  translationId: number
}

export type getAnimeEpisodesResponse = AnimeEpisode[]

export type AnimeEpisode = {
  episodeNumber: number
  link: string
  translation: AnimeTranslation[]
  screenshots: string[]
}
