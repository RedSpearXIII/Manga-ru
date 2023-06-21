import React, { useEffect, useRef, useState } from "react"
import styles from "./styles.module.pcss"
import { motion } from "framer-motion"
import { AnimeResponse, AnimeStatuses } from "~shared/api"
import { Badge } from "~shared/components"
import { animeListFilterModel } from "~features/anime-list-filter"
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

  const season = translateMediaSeason(anime.season)

  const onSetRatingMpa = () => {
    if (!anime.ratingMpa) return
    animeListFilterModel.setRatingMpa({ ratingMpa: anime.ratingMpa })
  }
  const onSetMinimalAge = () => {
    if (!anime.minimalAge) return
    animeListFilterModel.setMinimalAge({ minimalAge: anime.minimalAge })
  }
  const onAddGenre = (id: string, genre: string) => {
    animeListFilterModel.addGenre({ genre: { id, genre } })
  }
  const onSetStatus = (status: AnimeStatuses) => {
    animeListFilterModel.setStatus({ status })
  }
  const onSetAnimeDate = () => {
    animeListFilterModel.setSeason({ season: anime.season })
    if (anime.year)
      animeListFilterModel.addYear({ year: anime.year.toString() })
  }

  const onSetStudio = (studio: string) => {
    animeListFilterModel.setStudio({ studio })
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
        <p className={styles.season} onClick={onSetAnimeDate}>
          {season}
          {anime.year && `, ${anime.year} год`}
        </p>
        {anime.minimalAge ? (
          <Badge className={styles.mpaRating} onClick={onSetMinimalAge}>
            {anime.minimalAge}+
          </Badge>
        ) : (
          anime.ratingMpa && (
            <Badge className={styles.mpaRating} onClick={onSetRatingMpa}>
              {anime.ratingMpa}
            </Badge>
          )
        )}
      </div>

      <div className={styles.studio}>
        {anime.studio && (
          <p
            onClick={() => onSetStudio(anime.studio![0].studio)}
            className={styles.studioName}
          >
            Студия {anime.studio[0].studio}
          </p>
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

      {anime.genres && anime.genres.length > 0 && (
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
      )}
    </motion.div>
  )
}
