import { AnimeTypeVariants } from "~shared/api"

export const translateAnimeType = (type: AnimeTypeVariants) =>
  type === "tv"
    ? "Телесериал"
    : type === "movie"
    ? "Фильм"
    : type === "music"
    ? "Музыкальный"
    : type === "special"
    ? "Специальный"
    : type
