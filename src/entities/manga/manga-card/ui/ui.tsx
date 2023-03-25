import React, { FC } from "react"
import styles from "./styles.module.pcss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import useImageLoaded from "~shared/hooks/useImageLoading"
import clsx from "clsx"

interface MediaCardProps {
  manga: { id: string; title: string; image: string }
}

export const MediaCard: FC<MediaCardProps> = ({ manga }) => {
  const { isLoaded, onLoad, isError, onError } = useImageLoaded()

  return (
    <div className={styles.card}>
      <Link to={`/manga/title/${manga.id}`}>
        <span
          className={`${!isLoaded && !isError && styles.cardImageLoader}`}
        />
        <img
          onLoad={onLoad}
          onError={onError}
          className={clsx(styles.cardImage, isLoaded && styles.cardImageLoaded)}
          alt={"Отсутствует изображение"}
          src={manga.image}
        />

        <p className={styles.cardTitle}>{manga.title}</p>
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
