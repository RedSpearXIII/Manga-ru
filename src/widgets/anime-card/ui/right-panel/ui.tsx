import React, { FC } from "react"
import styles from "./styles.module.pcss"
import { motion } from "framer-motion"
import { AnimeResponse } from "~shared/api"
import { Badge } from "~shared/components"
import { useAnimeListFilterStore } from "~features/anime-list-filter"
import { shallow } from "zustand/shallow"

interface RightPanelProps {
  anime: AnimeResponse
}

export const RightPanel: FC<RightPanelProps> = ({ anime }) => {
  const { setRatingMpa, setGenres, setStatus, setSeason } =
    useAnimeListFilterStore((state) => state, shallow)

  const onSetRatingMpa = () => {
    setRatingMpa(anime.ratingMpa)
  }
  const onSetGenre = () => {}

  return (
    <motion.div
      className={styles.rightPanel}
      initial={{ scale: 0.5, opacity: 0, left: "105%" }}
      animate={{ scale: 1, opacity: 1, left: "105%" }}
    >
      <div className={styles.topInfo}>
        <p>{anime.season}</p>
        <Badge className={styles.mpaRating} onClick={onSetRatingMpa}>
          {anime.ratingMpa}
        </Badge>
      </div>

      <div className={styles.studio}>
        <p className={styles.studioName}>Студия {anime.studio[0].studio}</p>
        <div className={styles.animeProgress}>
          <p>{anime.episodesCount} серий/я</p>-
          <p>{anime.status === "ongoing" ? "Онгоинг" : "Выпущен"}</p>
        </div>
      </div>

      <div className={styles.genres}>
        {anime.genres.map(({ genre, id }, index) => {
          if (index < 3)
            return (
              <div className={styles.genre} key={id}>
                {genre}
              </div>
            )
        })}
      </div>
    </motion.div>
  )
}
