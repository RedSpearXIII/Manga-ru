import React from "react"
import { useParams } from "react-router-dom"
import styles from "./styles.module.pcss"
import { useGetAnimeByUrl } from "~shared/api"
import { Player } from "~widgets/player"

export const PagePlayer = () => {
  const { animeUrl } = useParams()

  const { data, isLoading } = useGetAnimeByUrl({ animeUrl: animeUrl! })
  if (!data && !isLoading) return <p>""</p>
  if (!data && isLoading) return <p>Loading...</p>
  return (
    <div className={styles.playerPageContainer}>
      <Player playerLink={data.linkPlayer} />
    </div>
  )
}
