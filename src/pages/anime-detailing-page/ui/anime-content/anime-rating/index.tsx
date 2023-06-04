import React from "react"
import { useParams } from "react-router-dom"
import { useGetAnimeRating, useSetAnimeRatingMutation } from "~shared/api"
import { RatingButton, MediaRating } from "~entities/rating/rating-button"
import styles from "./styles.module.pcss"
import { useQueryClient } from "@tanstack/react-query"

type Props = {
  animeRating?: number | undefined
}

export const AnimeRating = ({ animeRating }: Props) => {
  const { animeUrl } = useParams()
  const queryClient = useQueryClient()

  const { data } = useGetAnimeRating(animeUrl!)
  const { mutate } = useSetAnimeRatingMutation()

  const onRateMedia = (rating: number) => {
    mutate(
      { animeUrl: animeUrl!, rating },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [`getAnimeRating-${animeUrl}`],
          })
          queryClient.invalidateQueries({
            queryKey: [`getAnimeById-${animeUrl}`],
          })
        },
      }
    )
  }

  return (
    <div className={styles.animeRating}>
      {animeRating && (
        <MediaRating rating={parseFloat(animeRating.toFixed(1))} />
      )}
      <RatingButton
        onRateMedia={onRateMedia}
        ratingDistribution={data ? data : []}
      />
    </div>
  )
}
