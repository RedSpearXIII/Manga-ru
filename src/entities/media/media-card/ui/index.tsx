import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useImageLoading } from "~shared/hooks"
import styles from "./styles.module.pcss"
import clsx from "clsx"
import { BsFillImageFill } from "react-icons/all"

interface MediaCardProps {
  media: { url: string; title: string; image: string }
  type: "anime" | "manga"
}

export const MediaCard = ({ media, type }: MediaCardProps) => {
  const { isLoaded, isError, ...props } = useImageLoading()

  return (
    <Link to={`/${type}/title/${media.url}`}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          {!isLoaded && !isError && (
            <span
              className={clsx(styles.imageStatus, styles.cardImageLoader)}
            />
          )}
          {!isLoaded && isError && (
            <div className={clsx(styles.imageStatus, styles.cardImageError)}>
              <div>
                <BsFillImageFill />
                <p>Изображение отсутсвует</p>
              </div>
            </div>
          )}

          <img
            {...props}
            className={clsx(
              styles.cardImage,
              isLoaded && styles.cardImageLoaded
            )}
            alt={"Отсутствует изображение"}
            src={media.image}
          />
        </div>

        <p className={styles.cardTitle}>{media.title}</p>
      </div>
    </Link>
  )
}

export const MediaCardSkeleton = () => {
  return (
    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
      <div className={styles.skeleton}>
        <div className={styles.imageLoaderContainer}>
          <div className={styles.imageContainerLoader} />
        </div>
        <div className={styles.titleLoader} />
      </div>
    </motion.div>
  )
}
