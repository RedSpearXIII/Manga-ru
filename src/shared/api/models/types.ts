export type Genres = {
  id: string
  title: string
}

export type MediaType = {
  type: "манга" | "аниме"
  year: number
  status: string // поправить на enums
  limitation: string
}
