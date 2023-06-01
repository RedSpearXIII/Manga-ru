import React from "react"
import { useGetAnimeByUrl } from "~shared/api"
import { useParams } from "react-router-dom"
import styles from "../styles.module.pcss"

export const Genres = () => {
  const { animeUrl } = useParams()
  const { data, isLoading } = useGetAnimeByUrl({ animeUrl: animeUrl! })

  if (!data && isLoading) return <p>loading...</p>
  if (!data && !isLoading) return null
  if (!data.genres || data.genres.length <= 0) return null

  return (
    <div className={styles.infoBlock}>
      <p className={styles.title}>Жанры: </p>

      <div className={styles.content}>
        {data.genres.map(({ genre, id }) => (
          <div key={id} className={styles.item}>
            {genre}
          </div>
        ))}
      </div>
    </div>
  )
}
