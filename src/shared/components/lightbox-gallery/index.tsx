import React, { Dispatch, SetStateAction } from "react"
import Lightbox from "react-spring-lightbox"
import { ImageOverlay, Footer, Header } from "./ui"
import { Portal } from "~shared/components"
import { useDisableScroll } from "~shared/hooks"

type Props = {
  currentIndex: number
  setCurrentIndex: Dispatch<SetStateAction<number>>
  images: string[]
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  title?: string
}

const LightboxGallery = ({
  currentIndex,
  setCurrentIndex,
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

  useDisableScroll(isOpen)

  return (
    <>
      <Lightbox
        pageTransitionConfig={{
          from: { opacity: 0 },
          enter: { opacity: 1 },
          leave: { opacity: 0 },
        }}
        renderHeader={() => <Header onCloseLightbox={onClose} title={title} />}
        renderFooter={() => (
          <Footer
            images={images}
            setCurrentIndex={setCurrentIndex}
            totalImageCount={images.length}
            currentImageIndex={currentIndex}
          />
        )}
        currentIndex={currentIndex}
        images={imagesList}
        isOpen={isOpen}
        onClose={onClose}
        onNext={onNext}
        onPrev={onPrev}
      />

      {isOpen && (
        <Portal>
          <ImageOverlay />
        </Portal>
      )}
    </>
  )
}

export default LightboxGallery
