export type AnimeFavoriteListStatuses =
  | "InPlan"
  | "Watching"
  | "Watched"
  | "Postponed"

export type AddAnimeToFavoriteListParams = {
  animeUrl: string
  status: AnimeFavoriteListStatuses
}
