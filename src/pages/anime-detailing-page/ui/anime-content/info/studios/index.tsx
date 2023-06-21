import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useGetAnimeByUrl } from "~shared/api"
import styles from "../styles.module.pcss"
import { animeListFilterModel } from "~features/anime-list-filter"

export const Studios = () => {
  const { animeUrl } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useGetAnimeByUrl({ animeUrl: animeUrl! })

  if (!data && isLoading) return <p>loading...</p>
  if (!data && !isLoading) return null
  if (!data.studio || data.studio.length < 0) return null

  const goToAnimeWithStudio = (studio: string) => {
    animeListFilterModel.resetFilter()
    animeListFilterModel.setStudio({ studio })
    navigate("/anime")
  }

  return (
    <div className={styles.infoBlock}>
      <p className={styles.title}>Студии: </p>

      <div className={styles.content}>
        {data.studio.map(({ studio, id }) => (
          <div
            onClick={() => goToAnimeWithStudio(studio)}
            key={id}
            className={styles.item}
          >
            {studio}
          </div>
        ))}
      </div>
    </div>
  )
}
