import React from "react"
import styles from "./styles.module.pcss"
import { RatingIcon } from "./rating-icon"
import { getRatingColor } from "../lib"
import clsx from "clsx"

type Props = {
  rating: number
  onRateMedia: () => void
}

export const Rating = ({ rating, onRateMedia }: Props) => {
  const color = getRatingColor(rating)

  return (
    <div className={clsx(styles.rating, styles[color])}>
      <p>{rating} / 10</p>
      <RatingIcon rating={rating} />
    </div>
  )
}
