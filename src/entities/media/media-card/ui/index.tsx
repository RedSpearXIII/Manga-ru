import React from "react"
import { Link } from "react-router-dom"
import { useImageLoading } from "~shared/hooks"
import styles from "./styles.module.pcss"
import clsx from "clsx"
import { BsFillImageFill } from "react-icons/all"

interface MediaCardProps {
  media: { url?: string; id?: string; title: string; image: string }
  type: "anime" | "manga"
}

export const MediaCard = ({ media, type }: MediaCardProps) => {
  const { isLoaded, isError, ...props } = useImageLoading()
  return (
    <Link to={`/${type}/title/${media.url || media.id}`}>
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
    <div className={styles.skeleton}>
      <div className={styles.imageLoaderContainer}>
        <div className={styles.imageContainerLoader} />
      </div>
      <div className={styles.titleLoader}>
        <div className={styles.firstRow} />
        <div className={styles.secondRow} />
      </div>
    </div>
  )
}
