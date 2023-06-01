import { AnimeResponse, AnimeTypeVariants } from "~shared/api"

export type RelatedAnimeResponse = {
  anime: {
    minimalAge: number
    type?: AnimeTypeVariants
  } & AnimeResponse
  related: {
    type: string
    typeEn: string
  }
}
