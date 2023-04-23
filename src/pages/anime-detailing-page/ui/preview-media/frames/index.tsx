import React, { useState } from "react"
import styles from "./styles.module.pcss"
import loaderStyles from "../styles.module.pcss"
import { GalleryLightbox } from "~shared/components"
import { useGetAnimeImages } from "../../../api"
import { useParams } from "react-router-dom"
import { ImageItem } from "./image-item"

export const Frames = () => {
  const { animeId } = useParams()

  const [lightboxIsOpened, setLightboxIsOpened] = useState<{
    opened: boolean
    startFrom?: number
  }>({ opened: false })
  const { data, isError, isLoading } = useGetAnimeImages(animeId!)

  if (isError && !data) return null
  if (!isLoading && !data) return null

  const onLightboxClose = () => {
    setLightboxIsOpened({ opened: false, startFrom: 0 })
  }

  const openLightBox = (from: number) => {
    setLightboxIsOpened({ opened: true, startFrom: from })
  }

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
      <h6 className={"whitespace-nowrap"}>Кадры из аниме</h6>
      <div className={styles.gallery}>{images}</div>

      {!isLoading && (
        <GalleryLightbox
          images={data}
          isOpen={lightboxIsOpened}
          onClose={onLightboxClose}
        />
      )}
    </div>
  )
}
