import React, { useState } from "react"
import styles from "./styles.module.pcss"
import { GalleryLightBox } from "~shared/components"
import { useGetAnimeImages } from "../../api"
import { useParams } from "react-router-dom"

export const PreviewImages = () => {
  const { animeId } = useParams()

  const [lightboxIsOpened, setLightboxIsOpened] = useState(false)
  const { data, isSuccess, isLoading } = useGetAnimeImages(animeId!)

  if (isLoading) return null
  if (!isSuccess) return null

  const onLightboxClose = () => {
    setLightboxIsOpened(false)
  }

  return (
    <div className={styles.wrapper}>
      <h6>Кадры из аниме</h6>
      <div className={styles.gallery}>
        {data.map((src) => (
          <img alt={"Ошибка при загрузке"} className={styles.image} src={src} />
        ))}
      </div>

      <GalleryLightBox
        elements={data}
        isOpen={lightboxIsOpened}
        onClose={onLightboxClose}
      />
    </div>
  )
}
