import React from "react"
import { AnimePlayer } from "~features/anime-player"
import { useParams } from "react-router-dom"
import styles from "./styles.module.pcss"

export const Player = () => {
  const { animeId } = useParams()

  return (
    <div className={styles.playerPageContainer}>
      <AnimePlayer animeId={animeId!} />
    </div>
  )
}
