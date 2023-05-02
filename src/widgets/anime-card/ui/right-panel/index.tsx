import React, { useEffect, useRef, useState } from "react"
import styles from "./styles.module.pcss"
import { motion } from "framer-motion"
import { AnimeResponse, AnimeSeasons, AnimeStatuses } from "~shared/api"
import { Badge } from "~shared/components"
import { useAnimeListFilterStore } from "~features/anime-list-filter"
import { shallow } from "zustand/shallow"
import { translateMediaSeason } from "~entities/media"
import { variants } from "./variants"
import clsx from "clsx"

type Props = {
  anime: AnimeResponse
}

export const RightPanel = ({ anime }: Props) => {
  const panelRef = useRef<HTMLDivElement>(null)
  const [isLeftPosition, setIsLeftPosition] = useState(false)

  useEffect(() => {
    const bodyRight = document.body.getBoundingClientRect().right
    const elementRight = panelRef?.current?.getBoundingClientRect().right
    if (elementRight) {
      if (elementRight > bodyRight) {
        setIsLeftPosition(true)
      }
    }
  }, [panelRef])

  const { setRatingMpa, addGenre, setStatus, setSeason } =
    useAnimeListFilterStore((state) => state, shallow)
  const season = translateMediaSeason(anime.season)

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
      className={clsx(
        styles.rightPanel,
        isLeftPosition && styles.leftPanelPosition
      )}
      initial={"initial"}
      animate={"animate"}
      ref={panelRef}
      variants={variants}
    >
      <div className={styles.topInfo}>
        <p className={styles.season} onClick={() => onSetSeason(anime.season)}>
          {season}
        </p>
        <Badge className={styles.mpaRating} onClick={onSetRatingMpa}>
          {anime.ratingMpa}
        </Badge>
      </div>

      <div className={styles.studio}>
        {anime.studio && (
          <p className={styles.studioName}>Студия {anime.studio[0].studio}</p>
        )}
        <div className={styles.animeProgress}>
          <p>{anime.episodesCount} серий</p>-
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
