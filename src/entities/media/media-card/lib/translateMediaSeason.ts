import { AnimeSeasons } from "~shared/api"

export const translateMediaSeason = (seasons: AnimeSeasons) => {
  return seasons === "Fall"
    ? "Осень"
    : seasons === "Spring"
    ? "Весна"
    : seasons === "Summer"
    ? "Лето"
    : "Зима"
}
