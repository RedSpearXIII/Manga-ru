import React, { Dispatch, SetStateAction } from "react"
import styles from "./styles.module.pcss"
import { useLightboxThumbsStore } from "../../model"
import { Thumbs } from "./thumbs"

type Props = {
  currentImageIndex: number
  setCurrentIndex: Dispatch<SetStateAction<number>>
  totalImageCount: number
  images: string[]
}

export const Footer = ({
  currentImageIndex,
  setCurrentIndex,
  totalImageCount,
  images,
}: Props) => {
  const thumbsIsShowed = useLightboxThumbsStore((state) => state.isShowed)
  return (
    <div className={styles.footer}>
      {thumbsIsShowed && (
        <Thumbs setCurrentIndex={setCurrentIndex} images={images} />
      )}
      <div className={styles.content}>
        <p>
          {currentImageIndex + 1} / {totalImageCount}
        </p>
      </div>
    </div>
  )
}
