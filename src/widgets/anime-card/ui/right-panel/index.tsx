import React, { FC } from "react"
import styles from "./styles.module.pcss"
import { motion } from "framer-motion"
import { AnimeResponse, AnimeSeasons, AnimeStatuses } from "~shared/api"
import { Badge } from "~shared/components"
import { useAnimeListFilterStore } from "~features/anime-list-filter"
import { shallow } from "zustand/shallow"

interface RightPanelProps {
  anime: AnimeResponse
}

export const RightPanel: FC<RightPanelProps> = ({ anime }) => {
  const { setRatingMpa, addGenre, setStatus, setSeason } =
    useAnimeListFilterStore((state) => state, shallow)

  const onSetRatingMpa = () => {
    setRatingMpa(anime.ratingMpa)
  }
  const onAddGenre = (id: string, genre: string) => {
    addGenre({ id, genre })
  }
  const onSetStatus = (status: AnimeStatuses) => {
    setStatus(status)
  }
  const onSetSeason = (season: AnimeSeasons) => {
    setSeason(season)
  }

  return (
    <motion.div
      className={styles.rightPanel}
      initial={{ scale: 0.5, opacity: 0, left: "105%" }}
      animate={{ scale: 1, opacity: 1, left: "105%" }}
    >
      <div className={styles.topInfo}>
        <p className={styles.season} onClick={() => onSetSeason(anime.season)}>
          {anime.season}
        </p>
        <Badge className={styles.mpaRating} onClick={onSetRatingMpa}>
          {anime.ratingMpa}
        </Badge>
      </div>

      <div className={styles.studio}>
        <p className={styles.studioName}>Студия {anime.studio[0].studio}</p>
        <div className={styles.animeProgress}>
          <p>{anime.episodesCount} серий/я</p>-
          <p
            onClick={() => onSetStatus(anime.status)}
            className={styles.status}
          >
            {anime.status === "ongoing" ? "Онгоинг" : "Выпущен"}
          </p>
        </div>
      </div>

      <div className={styles.genres}>
        {anime.genres.map(({ genre, id }, index) => {
          if (index < 3)
            return (
              <div
                className={styles.genre}
                onClick={() => onAddGenre(id, genre)}
                key={id}
              >
                {genre}
              </div>
            )
        })}
      </div>
    </motion.div>
  )
}
