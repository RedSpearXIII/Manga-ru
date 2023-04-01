import { MangaGenres } from "~shared/types/manga"
import { MediaType } from "~shared/types"

export interface MangaModel {
  id: string
  title: string
  image: string
  url: string
  description: string
  genres: MangaGenres[]
  types: MediaType
  chaptersCount: number
}
