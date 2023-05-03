import { motion } from "framer-motion"
import React, { Dispatch, SetStateAction } from "react"
import styles from "./styles.module.pcss"
import { useSwipe } from "~shared/hooks"

type Props = {
  images: string[]
  setCurrentIndex: Dispatch<SetStateAction<number>>
}

export const Thumbs = ({ images, setCurrentIndex }: Props) => {
  const { startX, endX } = useSwipe()

  const onChangeCurrentIndex = (index: number) => {
    if (startX !== endX) return
    setCurrentIndex(index)
  }

  return (
    <motion.div
      className={styles.thumbsList}
      drag="x"
      dragConstraints={{
        left: -(images.length - 1) * 100,
        right: (images.length - 1) * 100,
      }}
    >
      {images.map((src, index) => (
        <div
          className={styles.thumb}
          onClick={() => onChangeCurrentIndex(index)}
        >
          <img
            className={styles.thumbImage}
            src={src}
            alt={"Ошибка при загрузки"}
          />
        </div>
      ))}
    </motion.div>
  )
}
