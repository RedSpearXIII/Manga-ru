import React from "react"
import Lightbox from "react-spring-lightbox"
import { ImageOverlay, Footer, Header } from "./ui"

type Props = {
  currentIndex: number
  images: string[]
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  title?: string
}

const LightboxGallery = ({
  currentIndex,
  onPrev,
  onNext,
  onClose,
  images,
  isOpen,
  title,
}: Props) => {
  const imagesList = images.map((src) => ({
    src: src,
    alt: "Ошибка при загрузке",
  }))
  return (
    <Lightbox
      renderHeader={() => <Header onClose={onClose} title={title} />}
      renderFooter={() => (
        <Footer
          totalImageCount={images.length}
          currentImageIndex={currentIndex}
        />
      )}
      renderImageOverlay={ImageOverlay}
      currentIndex={currentIndex}
      images={imagesList}
      isOpen={isOpen}
      onClose={onClose}
      onNext={onNext}
      onPrev={onPrev}
    />
  )
}

export default LightboxGallery
