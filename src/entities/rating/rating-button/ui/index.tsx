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
import { AiFillStar } from "react-icons/all"

type RatingButtonProps = {
  onRateMedia: () => void
  ratingDistribution: { rating: number; count: number }[]
}

export const RatingButton = ({
  onRateMedia,
  ratingDistribution,
}: RatingButtonProps) => {
  const { distributionPanelIsOpened } = useStore(
    distributionRatingModel.$distributionRating
  )

  const openDistribution = () => {
    distributionRatingModel.setDistributionPanelIsOpened(true)
  }

  return (
    <>
      <div
        onClick={openDistribution}
        className={clsx(styles.rating, styles["green"])}
      >
        <p>Оценить аниме</p>
        <div>
          <AiFillStar />
        </div>
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
