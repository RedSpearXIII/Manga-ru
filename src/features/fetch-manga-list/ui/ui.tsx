import React from "react"
import styles from "./styles.module.pcss"
import { useGetMangaList } from "~features/fetch-manga-list"
import { MediaCard } from "~entities/media-card"

export const MangaList = () => {
  const { data, isLoading, error } = useGetMangaList()

  if (isLoading) return <h1>Loading...</h1>

  if (error || !data) return <h1>Error</h1>

  return (
    <div>
      <div className={styles.list}>
        {data.map((manga) => (
          <MediaCard manga={manga} />
        ))}
      </div>
    </div>
  )
}
