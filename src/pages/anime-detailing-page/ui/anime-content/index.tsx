import React, { useState } from "react"
import styles from "./styles.module.pcss"
import { useParams } from "react-router-dom"
import { useGetAnimeById } from "~shared/api"
import clsx from "clsx"

export const AnimeContent = () => {
  const { animeId } = useParams()
  const { data, isLoading } = useGetAnimeById({ id: animeId! })

  if (!data && !isLoading) return <h1>Error</h1>

  if (isLoading) return <h1>loading</h1>

  const [descriptionTruncated, setDescriptionTruncated] = useState({
    truncated: data.description.length > 500,
    opened: false,
  })

  const uncoverDescription = () => {
    setDescriptionTruncated((prev) => ({
      truncated: prev.truncated,
      opened: !prev.opened,
    }))
  }

  return (
    <div className={styles.bg}>
      <div className={styles.content}>
        <img className={styles.image} src={data.image} alt={"Постер аниме"} />

        <div className={styles.animeContent}>
          <h4>{data.title}</h4>
          <p className={styles.description}>
            {descriptionTruncated.truncated && !descriptionTruncated.opened
              ? data.description.slice(0, 500) + "..."
              : data.description}

            {descriptionTruncated.truncated && (
              <span
                onClick={uncoverDescription}
                className={clsx(styles.showMore)}
              >
                {descriptionTruncated.opened ? "Скрыть все" : "Показать всё"}
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
