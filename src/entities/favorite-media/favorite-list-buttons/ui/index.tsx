import React from "react"
import styles from "./styles.module.pcss"
import { FavoriteListButton } from "./favorite-list-button"
import { LikeButton } from "./like-button"

export const FavoriteListButtons = () => {
  return (
    <div className={styles.buttons}>
      <FavoriteListButton />
      <LikeButton />
    </div>
  )
}
