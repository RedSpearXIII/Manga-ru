export type AnimeTrackStatuses =
  | "InPlan"
  | "Watching"
  | "Watched"
  | "Postponed"
  | "Dropped"

export type SetAnimeStatusParams = {
  animeUrl: string
  status: AnimeTrackStatuses
}
