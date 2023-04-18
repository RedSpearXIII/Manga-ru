import React, { useState } from "react"
import styles from "./styles.module.pcss"
import { GalleryLightbox } from "~shared/components"
import { useGetAnimeImages } from "../../api"
import { useParams } from "react-router-dom"
import { ImageItem } from "./image-item"

export const PreviewImages = () => {
  const { animeId } = useParams()

  const [lightboxIsOpened, setLightboxIsOpened] = useState<{
    opened: boolean
    startFrom?: number
  }>({ opened: false })
  const { data, isSuccess, isLoading } = useGetAnimeImages(animeId!)

  if (!isSuccess) return null

  const onLightboxClose = () => {
    setLightboxIsOpened({ opened: false, startFrom: 0 })
  }

  const openLightBox = (from: number) => {
    setLightboxIsOpened({ opened: true, startFrom: from })
  }

  const loader = Array.from({ length: 5 }).map(() => (
    <div className={styles.imageLoader} />
  ))
  const images = data.map((src, index) => (
    <ImageItem onClick={() => openLightBox(index)} key={src} src={src} />
  ))

  return (
    <div className={styles.wrapper}>
      <h6>Кадры из аниме</h6>
      <div className={styles.gallery}>{isLoading ? loader : images}</div>

      <GalleryLightbox
        images={data}
        isOpen={lightboxIsOpened}
        onClose={onLightboxClose}
      />
    </div>
  )
}
