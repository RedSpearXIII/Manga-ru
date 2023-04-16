import React, { FC } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useImageLoading } from "~shared/hooks"
import styles from "./styles.module.pcss"
import clsx from "clsx"
import { BsFillImageFill } from "react-icons/all"

interface MediaCardProps {
  media: { id: string; title: string; image: string }
  type: "anime" | "manga"
}

export const MediaCard: FC<MediaCardProps> = ({ media, type }) => {
  const { isLoaded, isError, ...props } = useImageLoading()

  return (
    <div className={clsx(styles.card)}>
      {!isLoaded && !isError && (
        <span className={clsx(styles.imageStatus, styles.cardImageLoader)} />
      )}
      {!isLoaded && isError && (
        <div className={clsx(styles.imageStatus, styles.cardImageError)}>
          <div>
            <BsFillImageFill />
            <p>Изображение отсутсвует</p>
          </div>
        </div>
      )}
      <Link to={`/${type}/title/${media.id}`}>
        <img
          {...props}
          className={clsx(styles.cardImage, isLoaded && styles.cardImageLoaded)}
          alt={"Отсутствует изображение"}
          src={media.image}
        />
      </Link>

      <Link className={styles.cardTitle} to={`/${type}/title/${media.id}`}>
        {media.title}
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
