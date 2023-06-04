import React from "react"
import styles from "./styles.module.pcss"
import { FavoriteListButton } from "./favorite-list-button"
import { LikeButton } from "./like-button"
import { AnimeFavoriteListStatuses } from "~shared/api"

type Props = {
  onAddAnimeToFavoriteList: (status: AnimeFavoriteListStatuses) => void
  onLikeAnime: () => void
}

export const FavoriteListButtons = ({
  onAddAnimeToFavoriteList,
  onLikeAnime,
}: Props) => {
  return (
    <div className={styles.buttons}>
      <FavoriteListButton onAddAnimeToFavoriteList={onAddAnimeToFavoriteList} />
      <LikeButton />
    </div>
  )
}
