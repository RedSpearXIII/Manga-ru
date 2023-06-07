import React from "react"
import { useGetAnimeTrailers } from "~pages/anime-detailing-page/api"
import { useParams } from "react-router-dom"
import loaderStyles from "../styles.module.pcss"
import styles from "./styles.module.pcss"
import LightGallery from "lightgallery/react"
import lgVideo from "lightgallery/plugins/video"
import lgHash from "lightgallery/plugins/hash"
import lgVimeoThumbnail from "lightgallery/plugins/vimeoThumbnail"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-thumbnail.css"
import "lightgallery/css/lg-video.css"
import "../light-gallery.css"
import { FaPlay } from "react-icons/all"
import { LIGHTBOX_LICENCE_KEY } from "~shared/config"

export const Trailers = () => {
  const { animeUrl } = useParams()
  const { data, isLoading, isError } = useGetAnimeTrailers(animeUrl!)

  if (isError) return null
  if (!isLoading && !data) return null
  if (!isLoading && data.length === 0) return null

  return (
    <div>
      <h3>Видео</h3>
      {isLoading ? (
        <div className={loaderStyles.mediaLoader} />
      ) : (
        <div>
          <LightGallery
            onAfterOpen={() => (document.body.style.overflowY = "hidden")}
            onBeforeClose={() => (document.body.style.overflowY = "auto")}
            galleryId={"anime-page-video-gallery"}
            autoplayVideoOnSlide
            speed={500}
            plugins={[lgVideo, lgHash, lgVimeoThumbnail]}
            licenseKey={LIGHTBOX_LICENCE_KEY}
          >
            {data.map((video) => (
              <a
                key={video.playerUrl}
                className={styles.videoImageContainer}
                href={video.playerUrl}
              >
                <img
                  alt={video.name}
                  src={video.imageUrl}
                  data-src={video.playerUrl}
                />
                <div className={styles.playIcon}>
                  <FaPlay />
                </div>
              </a>
            ))}
          </LightGallery>
        </div>
      )}
    </div>
  )
}
