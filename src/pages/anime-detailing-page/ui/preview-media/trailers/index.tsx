import React from "react"
import { useGetAnimeTrailers } from "~pages/anime-detailing-page/api"
import { useParams } from "react-router-dom"
import styles from "./styles.module.pcss"
import loaderStyles from "../styles.module.pcss"

export const Trailers = () => {
  const { animeUrl } = useParams()

  const { data, isLoading, isError } = useGetAnimeTrailers(animeUrl!)

  if (isError) return null
  if (!isLoading && !data) return null
  if (!isLoading && data.length === 0) return null

  return (
    <div>
      <h3>Тизер</h3>
      {isLoading ? (
        <div className={loaderStyles.mediaLoader} />
      ) : (
        <iframe
          className={styles.iframe}
          width="227"
          height="128"
          src={data[0].playerUrl.replace("http", "https")}
        />
      )}
    </div>
  )
}
