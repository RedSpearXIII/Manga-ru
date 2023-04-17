import { AnimeStatuses } from "~shared/api"

export const translateMediaStatus = (status: AnimeStatuses) => {
  return status === "ongoing" ? "Онгоинг" : "Выпущен"
}
