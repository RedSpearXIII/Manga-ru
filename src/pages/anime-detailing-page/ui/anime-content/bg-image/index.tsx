import React, { useEffect, useState } from "react"
import { useGetAnimeImages } from "~pages/anime-detailing-page/api"
import { useParams } from "react-router-dom"
import styles from "./styles.module.pcss"

export const BgImage = () => {
  const { animeUrl } = useParams()
  const { data, isLoading } = useGetAnimeImages(animeUrl!)
  const [imageSrc, setImageSrc] = useState<null | string>(null)

  useEffect(() => {
    if (data) {
      const img = new Image()
      img.src = data[0]
      img.loading = "eager"
      img.onload = () => {
        setImageSrc(data[0])
      }
    }
  }, [data])

  if (!data && !isLoading) return null

  return (
    <>
      {imageSrc && (
        <div className={styles.wrapper}>
          <div
            className={styles.bgImage}
            style={{ backgroundImage: `url(${imageSrc})` }}
          />
        </div>
      )}
    </>
  )
}
