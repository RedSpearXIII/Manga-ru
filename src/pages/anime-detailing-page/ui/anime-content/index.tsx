import React, { useEffect, useState } from "react"
import styles from "./styles.module.pcss"
import { useParams } from "react-router-dom"
import { useGetAnimeById } from "~shared/api"
import clsx from "clsx"
import { Badge } from "~shared/components"

export const AnimeContent = () => {
  const { animeId } = useParams()
  const { data, isLoading } = useGetAnimeById({ animeId: animeId! })

  const [descriptionTruncated, setDescriptionTruncated] = useState({
    truncated: false,
    opened: false,
  })

  useEffect(() => {
    if (data?.description) {
      setDescriptionTruncated({
        truncated: data.description.length > 500,
        opened: false,
      })
    }
  }, [data])

  const uncoverDescription = () => {
    setDescriptionTruncated((prev) => ({
      truncated: prev.truncated,
      opened: !prev.opened,
    }))
  }

  if (!data && !isLoading) return <h1>Error</h1>
  if (!data && isLoading) return <h1>loading</h1>

  return (
    <div className={styles.bg}>
      <div className={styles.content}>
        <div className={styles.poster}>
          <img className={styles.image} src={data.image} alt={"Постер аниме"} />
          <span className={styles.minimalAgeBadge}>
            <Badge className={"bg-orange-300"}>
              {data.minimalAge ? `${data.minimalAge}+` : data.ratingMpa}
            </Badge>
          </span>
        </div>

        {data.description && (
          <div className={styles.animeContent}>
            <h1>{data.title}</h1>
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
        )}
      </div>
    </div>
  )
}
