import React, { useState } from "react"
import styles from "./styles.module.pcss"
import loaderStyles from "../styles.module.pcss"
import { useParams } from "react-router-dom"
import { ImageItem } from "./image-item"
import { LightboxGallery } from "~shared/components"
import { useGetAnimeByUrl } from "~shared/api"
import { useGetAnimeImages } from "../../../api"

export const Frames = () => {
  const { animeUrl } = useParams()

  const { data, isError, isLoading } = useGetAnimeImages(animeUrl!)
  const { data: animeData } = useGetAnimeByUrl({ animeUrl: animeUrl! })

  const [lightboxIsOpened, setLightboxIsOpened] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const closeLightbox = () => {
    setLightboxIsOpened(false)
  }
  const openLightBox = (from: number) => {
    setLightboxIsOpened(true)
    setCurrentImageIndex(from)
  }

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentImageIndex(currentImageIndex + 1)
  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentImageIndex(currentImageIndex - 1)

  if (isError && !data) return null
  if (!isLoading && !data) return null
  if (!isLoading && data.length <= 0) return null

  const loaders = Array.from({ length: 5 }).map((_, index) => (
    <div key={index} className={loaderStyles.mediaLoader} />
  ))

  const images = isLoading
    ? loaders
    : data.map((src, index) => (
        <ImageItem onClick={() => openLightBox(index)} key={src} src={src} />
      ))

  return (
    <div>
      <h3 className={"whitespace-nowrap"}>Кадры из аниме</h3>
      <div className={styles.gallery}>{images}</div>

      {!isLoading && (
        <LightboxGallery
          setCurrentIndex={setCurrentImageIndex}
          title={`Кадры из аниме ${animeData?.title}`}
          currentIndex={currentImageIndex}
          images={data}
          isOpen={lightboxIsOpened}
          onClose={closeLightbox}
          onNext={gotoNext}
          onPrev={gotoPrevious}
        />
      )}
    </div>
  )
}
