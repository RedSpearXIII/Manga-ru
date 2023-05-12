import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useGetAnimeByUrl } from "~shared/api"
import styles from "./styles.module.pcss"
import clsx from "clsx"

export const Description = () => {
  const { animeUrl } = useParams()
  const { data, isLoading } = useGetAnimeByUrl({ animeUrl: animeUrl! })

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

  if (!data && !isLoading) return null
  if (!data && isLoading) return <h1>loading</h1>
  if (!data.description || data.description.length <= 0) return null

  return (
    <div>
      <p className={styles.description}>
        {descriptionTruncated.truncated && !descriptionTruncated.opened
          ? data.description.slice(0, 500) + "..."
          : data.description}

        {descriptionTruncated.truncated && (
          <span onClick={uncoverDescription} className={clsx(styles.showMore)}>
            {descriptionTruncated.opened ? "Скрыть все" : "Показать всё"}
          </span>
        )}
      </p>
    </div>
  )
}
