import React from "react"
import { useParams } from "react-router-dom"
import { useGetAnimeRating } from "~shared/api"
import { Rating } from "~entities/rating"

type Props = {
  animeRating: number | undefined
}

export const AnimeRating = ({ animeRating }: Props) => {
  const { animeUrl } = useParams()
  const { data } = useGetAnimeRating(animeUrl!)

  if (!animeRating) return null

  return (
    <Rating
      rating={parseFloat(animeRating.toFixed(1))}
      onRateMedia={() => {}}
      ratingDistribution={data ? data : []}
    />
  )
}
