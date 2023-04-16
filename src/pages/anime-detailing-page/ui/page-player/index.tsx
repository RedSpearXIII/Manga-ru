import React from "react"
import { AnimePlayer } from "~features/anime-player"
import { useParams } from "react-router-dom"
import styles from "./styles.module.pcss"
import { useGetAnimeById } from "~shared/api"

export const PagePlayer = () => {
  const { animeId } = useParams()

  const { data, isLoading } = useGetAnimeById({ animeId: animeId! })
  if (!data && !isLoading) return <p>""</p>
  if (!data && isLoading) return <p>Loading...</p>

  return (
    <div className={styles.playerPageContainer}>
      <AnimePlayer playerLink={data.linkPlayer} />
    </div>
  )
}
