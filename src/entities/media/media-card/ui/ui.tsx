import React, { FC } from "react"
import styles from "./styles.module.pcss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import useImageLoaded from "~shared/hooks/useImageLoading"
import clsx from "clsx"

interface MediaCardProps {
  media: { id: string; title: string; image: string }
  type: "anime" | "manga"
}

export const MediaCard: FC<MediaCardProps> = ({ media, type }) => {
  const { isLoaded, isError, ...props } = useImageLoaded()

  return (
    <div className={clsx(styles.card)}>
      <Link to={`/${type}/title/${media.id}`}>
        <span
          className={`${!isLoaded && !isError && styles.cardImageLoader}`}
        />
        <img
          {...props}
          className={clsx(styles.cardImage, isLoaded && styles.cardImageLoaded)}
          alt={"Отсутствует изображение"}
          src={media.image}
        />
        <p className={clsx(styles.cardTitle)}>{media.title}</p>
      </Link>
    </div>
  )
}

export const MediaCardSkeleton = () => {
  return (
    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
      <div className={styles.skeleton}>
        <div className={styles.imageLoader}></div>
        <div className={styles.titleLoader}></div>
      </div>
    </motion.div>
  )
}
