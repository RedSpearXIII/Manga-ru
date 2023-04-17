import { MangaGenres } from "~shared/types/manga"

export interface MangaModel {
  id: string
  title: string
  image: string
  url: string
  description: string
  genres: MangaGenres[]
  types: any /*TODO: Поправить тип*/
  chaptersCount: number
}
