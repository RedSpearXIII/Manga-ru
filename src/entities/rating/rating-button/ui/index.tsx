import React from "react"
import styles from "./styles.module.pcss"
import { RatingIcon } from "./rating-icon"
import { getRatingColor } from "../lib"
import clsx from "clsx"
import { Tooltip } from "~shared/components"
import { RatingDistribution } from "./rating-distribution"
import { AiFillStar } from "react-icons/all"

type RatingButtonProps = {
  onRateMedia: (rating: number) => void
  ratingDistribution: { rating: number; count: number }[]
}

export const RatingButton = ({
  onRateMedia,
  ratingDistribution,
}: RatingButtonProps) => {
  return (
    <Tooltip
      keepLabelVisibleOnHover
      position={"bottom"}
      withoutLabelBackground
      width={320}
      label={
        <RatingDistribution
          onRateMedia={onRateMedia}
          ratingDistribution={ratingDistribution}
        />
      }
    >
      <div className={clsx(styles.rating, styles["green"])}>
        <p>Оценить аниме</p>
        <div>
          <AiFillStar />
        </div>
      </div>
    </Tooltip>
  )
}

type MediaRatingProps = {
  rating: number
}
export const MediaRating = ({ rating }: MediaRatingProps) => {
  const color = getRatingColor(rating)

  return (
    <div className={clsx(styles.rating, styles[color])}>
      <p>Рейтинг: {rating} / 10</p>
      <RatingIcon rating={rating} />
    </div>
  )
}
