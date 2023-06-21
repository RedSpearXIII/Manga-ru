import React from "react"
import styles from "./styles.module.pcss"
import { Genres } from "./genres"
import { Studios } from "./studios"
import { Characteristics } from "./characteristics"
import { useGetAnimeByUrl } from "~shared/api"
import { useParams } from "react-router-dom"

export const Info = () => {
  const { animeUrl } = useParams()
  const { data } = useGetAnimeByUrl({ animeUrl: animeUrl! })

  if (data && !data.genres && !data.studio) return null

  return (
    <div className={styles.info}>
      <Genres />
      <Studios />
      <Characteristics />
    </div>
  )
}
