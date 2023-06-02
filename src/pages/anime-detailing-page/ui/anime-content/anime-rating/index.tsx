import React from "react"
import { useParams } from "react-router-dom"
import { useGetAnimeRating } from "~shared/api"
import { RatingButton, MediaRating } from "~entities/rating/rating-button"
import styles from "./styles.module.pcss"

type Props = {
  animeRating?: number | undefined
}

export const AnimeRating = ({ animeRating }: Props) => {
  const { animeUrl } = useParams()
  const { data } = useGetAnimeRating(animeUrl!)

  return (
    <div className={styles.animeRating}>
      {animeRating && (
        <MediaRating rating={parseFloat(animeRating.toFixed(1))} />
      )}
      <RatingButton
        onRateMedia={() => {}}
        ratingDistribution={data ? data : []}
      />
    </div>
  )
}
