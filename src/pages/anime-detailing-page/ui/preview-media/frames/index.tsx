import React from "react"
import styles from "./styles.module.pcss"
import loaderStyles from "../styles.module.pcss"
import { useParams } from "react-router-dom"
import { ImageItem } from "./image-item"
import { useGetAnimeByUrl } from "~shared/api"
import { useGetAnimeImages } from "../../../api"
import LightGallery from "lightgallery/react"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import "../light-gallery.css"
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import lgHash from "lightgallery/plugins/hash"
import lgVimeoThumbnail from "lightgallery/plugins/vimeoThumbnail"
import { LIGHTBOX_LICENCE_KEY } from "~shared/config"

export const Frames = () => {
  const { animeUrl } = useParams()

  const { data, isError, isLoading } = useGetAnimeImages(animeUrl!)
  const { data: animeData } = useGetAnimeByUrl({ animeUrl: animeUrl! })

  if (isError && !data) return null
  if (!isLoading && !data) return null
  if (!isLoading && data.length <= 0) return null

  const loaders = Array.from({ length: 5 }).map((_, index) => (
    <div key={index} className={loaderStyles.mediaLoader} />
  ))

  return (
    <div>
      <h3 className={"whitespace-nowrap"}>Кадры из аниме</h3>

      {isLoading ? (
        <div className={styles.gallery}>{loaders}</div>
      ) : (
        <div className={styles.gallery}>
          <LightGallery
            onAfterOpen={() => (document.body.style.overflowY = "hidden")}
            onBeforeClose={() => (document.body.style.overflowY = "auto")}
            galleryId={"anime-page-frames-gallery"}
            resetScrollPosition
            download={false}
            speed={500}
            plugins={[lgThumbnail, lgZoom, lgHash, lgVimeoThumbnail]}
            licenseKey={LIGHTBOX_LICENCE_KEY}
          >
            {data.map((src) => (
              <ImageItem
                alt={`Кадры из ${animeData?.title}`}
                key={src}
                src={src}
              />
            ))}
          </LightGallery>
        </div>
      )}
    </div>
  )
}
