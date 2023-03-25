import React, { FC } from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"

type Props = {
  id: string
  title: string
  image: string
}

export const SimilarMangaCard: FC<Props> = ({ image, title }) => {
  return (
    <div className={styles.card}>
      <img className={styles.image} src={image} alt={"manga-image"} />
      <div className={styles.content}>
        <div className={styles.titleName}>
          <h6>Манга</h6>
          <p>{title}</p>
        </div>
      </div>
    </div>
  )
}

export const SimilarMangaCardLoader = () => {
  return (
    <div className={clsx(styles.card, styles.loader)}>
      <div
        className={clsx(styles.image, "dark:bg-slate-700 bg-slate-300 h-full")}
      />
      <div className={styles.content}>
        <div className={"mt-2"}>
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
      </div>
    </div>
  )
}
