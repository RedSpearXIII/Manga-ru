import React from "react"
import styles from "./styles.module.pcss"
import { SetMediaStatusButton } from "~features/media-status/set-media-status"
import { AddMediaToFavoritesButton } from "~features/favorite-media/add-media-to-favorites"
import { useParams } from "react-router-dom"
import { useStore } from "effector-react"
import { $isAuth } from "~entities/viewer/model/viewer"

export const AnimeListManageBtns = () => {
  const { animeUrl } = useParams()
  const isAuth = useStore($isAuth)
  return (
    <div className={styles.animeListManageBtns}>
      <SetMediaStatusButton isAuth={isAuth} animeUrl={animeUrl!} />
      <AddMediaToFavoritesButton />
    </div>
  )
}
