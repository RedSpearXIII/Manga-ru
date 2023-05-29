import React from "react"
import styles from "./styles.module.pcss"
import { RatingIcon } from "./rating-icon"
import { getRatingColor } from "../lib"
import clsx from "clsx"
import { Portal } from "~shared/components"
import { RatingDistribution } from "./rating-distribution"
import { AnimatePresence } from "framer-motion"
import { useStore } from "effector-react"
import { distributionRatingModel } from "../model"

type Props = {
  rating: number
  onRateMedia: () => void
  ratingDistribution: { rating: number; count: number }[]
}

export const Rating = ({ rating, onRateMedia, ratingDistribution }: Props) => {
  const color = getRatingColor(rating)
  const { distributionPanelIsOpened } = useStore(
    distributionRatingModel.$distributionRating
  )

  const openDistribution = () => {
    !distributionPanelIsOpened &&
      distributionRatingModel.setDistributionPanelIsOpened(true)
  }
  return (
    <>
      <div
        onClick={openDistribution}
        className={clsx(styles.rating, styles[color])}
      >
        <p>{rating} / 10</p>
        <RatingIcon rating={rating} />
      </div>
      <AnimatePresence>
        {distributionPanelIsOpened && (
          <Portal>
            <RatingDistribution ratingDistribution={ratingDistribution} />
          </Portal>
        )}
      </AnimatePresence>
    </>
  )
}
