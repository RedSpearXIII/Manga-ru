import { motion } from "framer-motion"
import React, { FC, useEffect, useRef, useState } from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"
import { getUserDeviceType } from "~shared/lib"

interface SlideProps {
  images: string[]
  currentImageIndex: number
  onClose: () => void
}

export const Slide: FC<SlideProps> = ({
  images,
  currentImageIndex,
  onClose,
}) => {
  const userDevice = getUserDeviceType()

  const [isZoomed, setIsZoomed] = useState(false)

  const [scaleValue, setScaleValue] = useState(1.2)
  const onWhell = (e: WheelEvent) => {
    if (!isZoomed) return

    setScaleValue((prev) => {
      if (e.deltaY === 100) {
        if (prev <= 1.2) return prev
        return prev - 0.1
      } else {
        return prev + 0.1
      }
    })
  }

  useEffect(() => {
    if (userDevice === "desktop") {
      document.addEventListener("wheel", onWhell)
    }

    return () => {
      document.removeEventListener("wheel", onWhell)
    }
  }, [isZoomed])

  const handleImageClick = () => {
    setIsZoomed((prev) => !prev)
  }

  const currentImageSrc = images[currentImageIndex]
  const constraintsRef = useRef(null)

  return (
    <>
      <motion.div
        className={styles.slide}
        ref={constraintsRef}
        onClick={handleImageClick}
      >
        <motion.div
          className={clsx(isZoomed ? "cursor-zoom-out" : "cursor-zoom-in")}
          drag
          dragConstraints={constraintsRef}
        >
          <div style={{ transform: `scale(${isZoomed ? scaleValue : 1})` }}>
            <img
              className={styles.image}
              alt={"Ошибка"}
              src={currentImageSrc}
            />
          </div>
        </motion.div>
      </motion.div>

      <div className={styles.backdrop} onClick={onClose} />
    </>
  )
}
