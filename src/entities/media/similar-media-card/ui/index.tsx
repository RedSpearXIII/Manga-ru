import React from "react"
import styles from "./styles.module.pcss"

type Props = {
  image: string
  title: string
}

export const SimilarMediaCard = ({ image, title }: Props) => {
  return (
    <div className={styles.card}>
      <div className={styles.top}>
        <img
          src={image}
          className={styles.cardImage}
          alt={"Ошибка при загрузки"}
        />
        <p className={styles.relationType}>Приквел</p>
      </div>
      <p className={styles.title}>{title}</p>
    </div>
  )
}

export const SimilarMediaCardLoader = () => {
  return <p>loading</p>
}
