export interface Manga {
  id: string
  title: string
  image: string
  url: string
  description: string
  genres: { id: string; title: string }[]
  types: any /*TODO: Поправить тип*/
  chaptersCount: number
}
