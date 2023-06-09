import React from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"
import { RxDotFilled } from "react-icons/all"
import { translateAnimeType } from "~entities/media"

type Props = {
  relationType: string
  title: string
  image: string
  type?: string
  episodesCount?: number
  year?: number
}

export const RelatedMediaCard = ({
  image,
  title,
  relationType,
  type,
  episodesCount,
  year,
}: Props) => {
  const mediaType = translateAnimeType(type as any)
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={"manga-image"} />
      <div className={styles.content}>
        <div className={styles.titleName}>
          <h3>{relationType}</h3>
          <p>{title}</p>
        </div>
        <div className={styles.info}>
          {mediaType && <p>{mediaType}</p>}
          {mediaType && episodesCount && (
            <>
              <RxDotFilled />
              <p>{episodesCount} эп.</p>
            </>
          )}
          {year && (
            <>
              <RxDotFilled />
              <p>{year} г.</p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export const RelatedMediaCardLoader = () => {
  return (
    <div className={clsx(styles.card, styles.loader)}>
      <div
        className={clsx(styles.image, "dark:bg-slate-700 bg-slate-300 h-full")}
      />
      <div className={styles.content}>
        <div>
          <div
            className={
              "dark:bg-slate-700 bg-slate-300 h-4 max-w-[120px] rounded"
            }
          />
          <div className={"dark:bg-slate-700 bg-slate-300 h-2 my-1 rounded"} />
          <div className={"dark:bg-slate-700 bg-slate-300 h-2 mb-1 rounded"} />
          <div
            className={"dark:bg-slate-700 bg-slate-300 h-2 w-[30%] rounded"}
          />
        </div>
        <div
          className={"dark:bg-slate-700 bg-slate-300 h-2 max-w-[120px] rounded"}
        />
      </div>
    </div>
  )
}
