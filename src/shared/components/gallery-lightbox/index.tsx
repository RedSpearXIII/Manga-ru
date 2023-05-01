import React, { useEffect, useState } from "react"
import { Portal } from "~shared/components"
import styles from "./styles.module.pcss"
import { BiChevronLeft, BiChevronRight } from "react-icons/all"
import { Slide } from "./ui"

type Props = {
  isOpen: { startFrom?: number; opened: boolean }
  onClose: () => void
  images: string[]
}

const GalleryLightbox = ({ onClose, isOpen, images }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(
    isOpen.startFrom || 0
  )

  useEffect(() => {
    document.body.style.overflowY = isOpen.opened ? "hidden" : "auto"
  }, [isOpen.opened])

  useEffect(() => {
    setCurrentImageIndex(isOpen.startFrom || 0)
  }, [isOpen.startFrom])

  const handleNextSlideClick = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length)
  }

  const handlePrevSlideClick = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    )
  }

  return (
    <Portal>
      {isOpen.opened && (
        <>
          <div className={styles.content}>
            <div className={styles.slideBtn} onClick={handlePrevSlideClick}>
              <BiChevronLeft />
            </div>
            <div className={styles.slideContainer}>
              <Slide
                onClose={onClose}
                currentImageIndex={currentImageIndex}
                images={images}
              />
            </div>
            <div className={styles.slideBtn} onClick={handleNextSlideClick}>
              <BiChevronRight />
            </div>
          </div>
        </>
      )}
    </Portal>
  )
}

export default GalleryLightbox
