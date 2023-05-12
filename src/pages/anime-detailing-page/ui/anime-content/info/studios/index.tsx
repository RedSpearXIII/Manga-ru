import React from "react"
import { useParams } from "react-router-dom"
import { useGetAnimeByUrl } from "~shared/api"
import styles from "../styles.module.pcss"

export const Studios = () => {
  const { animeUrl } = useParams()
  const { data, isLoading } = useGetAnimeByUrl({ animeUrl: animeUrl! })

  if (!data && isLoading) return <p>loading...</p>
  if (!data && !isLoading) return <p>error</p>

  if (!data.studio || data.studio.length < 0) return null

  return (
    <div className={styles.infoBlock}>
      <p className={styles.title}>Студии: </p>

      <div className={styles.content}>
        {data.studio.map(({ studio, id }) => (
          <div key={id} className={styles.item}>
            {studio}
          </div>
        ))}
      </div>
    </div>
  )
}
