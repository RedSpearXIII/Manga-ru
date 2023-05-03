import React from "react"
import styles from "./styles.module.pcss"

type Props = {
  currentImageIndex: number
  totalImageCount: number
}

export const Footer = ({ currentImageIndex, totalImageCount }: Props) => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <p>
          {currentImageIndex + 1} / {totalImageCount}
        </p>
      </div>
    </div>
  )
}
