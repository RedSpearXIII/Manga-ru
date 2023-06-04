import React from "react"
import { AnimeGenre, useGetAnimeByUrl } from "~shared/api"
import { useNavigate, useParams } from "react-router-dom"
import styles from "../styles.module.pcss"
import { animeListFilterModel } from "~features/anime-list-filter"

export const Genres = () => {
  const { animeUrl } = useParams()
  const navigate = useNavigate()
  const { data, isLoading } = useGetAnimeByUrl({ animeUrl: animeUrl! })

  if (!data && isLoading) return <p>loading...</p>
  if (!data && !isLoading) return null
  if (!data.genres || data.genres.length <= 0) return null

  const goToAnimeWithGenre = (genre: AnimeGenre) => {
    animeListFilterModel.resetFilter()
    animeListFilterModel.setGenres({ genres: [genre] })
    navigate("/anime")
  }

  return (
    <div className={styles.infoBlock}>
      <p className={styles.title}>Жанры: </p>

      <div className={styles.content}>
        {data.genres.map(({ genre, id }) => (
          <div
            onClick={() => goToAnimeWithGenre({ genre, id })}
            key={id}
            className={styles.item}
          >
            {genre}
          </div>
        ))}
      </div>
    </div>
  )
}
