import { Genres, MediaType } from "./types"

export interface MangaModel {
  id: string
  title: string
  image: string
  url: string
  description: string
  genres: Genres[]
  types: MediaType
  chaptersCount: number
}
