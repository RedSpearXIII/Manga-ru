import React, { useRef } from "react"
import styles from "./styles.module.pcss"
import colorStyles from "./colors.module.pcss"
import { AiFillStar, IoClose } from "react-icons/all"
import {
  getRatingColor,
  getRatingDistributionWithPercentage,
} from "~entities/rating/rating-button/lib"
import { motion } from "framer-motion"
import clsx from "clsx"
import { useDisableScroll, useOnClickOutside } from "~shared/hooks"
import { distributionRatingModel } from "../../model"
import { useStore } from "effector-react"

type Props = {
  ratingDistribution: { rating: number; count: number }[]
}

export const RatingDistribution = ({ ratingDistribution }: Props) => {
  const distributionPanelRef = useRef(null)
  const { distributionPanelIsOpened } = useStore(
    distributionRatingModel.$distributionRating
  )

  const closePanel = () => {
    distributionRatingModel.setDistributionPanelIsOpened(false)
  }

  useDisableScroll(distributionPanelIsOpened)
  useOnClickOutside(distributionPanelRef, () => {
    closePanel()
  })

  const { ratings, totalVotes } =
    getRatingDistributionWithPercentage(ratingDistribution)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className={styles.backdrop}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        ref={distributionPanelRef}
        className={styles.ratingDistribution}
      >
        <div className={styles.header}>
          <p className={styles.headerTitle}>
            Нажмите на звездочку чтобы оценить аниме
          </p>
          <IoClose onClick={closePanel} />
        </div>

        <div className={styles.distributionTable}>
          {ratings.map(({ rating, count, percentage }) => (
            <div
              className={clsx(
                styles.tableRow,
                colorStyles[`${getRatingColor(rating)}`]
              )}
            >
              <div className={styles.rating}>
                <AiFillStar />
                <p>{rating}</p>
              </div>
              <div className={styles.slider}>
                <motion.span
                  transition={{
                    delay: 0.15,
                  }}
                  animate={{ width: `${percentage}%` }}
                  className={styles.sliderFillLine}
                />
                <p className={styles.count}>{count} голосов</p>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.totalVotes}>Всего оценок: {totalVotes}</p>
      </motion.div>
    </motion.div>
  )
}
