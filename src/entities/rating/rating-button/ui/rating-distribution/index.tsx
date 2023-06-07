import React from "react"
import styles from "./styles.module.pcss"
import colorStyles from "./colors.module.pcss"
import { AiFillStar } from "react-icons/all"
import {
  getRatingColor,
  getRatingDistributionWithPercentage,
} from "~entities/rating/rating-button/lib"
import { motion } from "framer-motion"
import clsx from "clsx"

type Props = {
  ratingDistribution: { rating: number; count: number }[]
  onRateMedia: (rating: number) => void
}

export const RatingDistribution = ({
  ratingDistribution,
  onRateMedia,
}: Props) => {
  const { ratings, totalVotes } =
    getRatingDistributionWithPercentage(ratingDistribution)

  return (
    <div className={styles.ratingDistribution}>
      <div className={styles.header}>
        <p className={styles.headerTitle}>
          Нажмите на звездочку чтобы оценить аниме
        </p>
      </div>

      <div className={styles.distributionTable}>
        {ratings.map(({ rating, count, percentage }) => (
          <div
            key={rating}
            onClick={() => onRateMedia(rating)}
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
    </div>
  )
}
