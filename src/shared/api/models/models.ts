import { Genres, MediaType } from "./types"

export interface Manga {
  id: string
  title: string
  image: string
  url: string
  description: string
  genres: Genres[]
  types: MediaType
  chaptersCount: number
}
