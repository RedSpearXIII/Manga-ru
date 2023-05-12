import React from "react"
import styles from "./styles.module.pcss"
import { useParams } from "react-router-dom"
import { useGetAnimeByUrl } from "~shared/api"
import { Badge } from "~shared/components"
import { Description } from "./description"
import { Info } from "./info"
import { useScreenSize } from "~shared/hooks"
import { Breakpoints } from "~shared/types"
import { BgImage } from "./bg-image"

export const AnimeContent = () => {
  const { animeUrl } = useParams()
  const { data, isLoading } = useGetAnimeByUrl({ animeUrl: animeUrl! })
  const screenSize = useScreenSize()

  if (!data && !isLoading) return <h1>Error</h1>
  if (!data && isLoading) return <h1>loading</h1>

  return (
    <div className={styles.bg}>
      <BgImage />
      <div className={styles.content}>
        <div className={styles.poster}>
          <img className={styles.image} src={data.image} alt={"Постер аниме"} />
          <span className={styles.minimalAgeBadge}>
            <Badge className={"bg-orange-300"}>
              {data.minimalAge ? `${data.minimalAge}+` : data.ratingMpa}
            </Badge>
          </span>
        </div>

        <div className={styles.rightBlock}>
          <h1>{data.title}</h1>
          {screenSize >= Breakpoints.lg && (
            <>
              <Info />
              <Description />
            </>
          )}
        </div>
      </div>
      {screenSize < Breakpoints.lg && (
        <>
          <div className={styles.infoMobile}>
            <Info />
          </div>
          <div className={styles.descriptionMobile}>
            <p className={styles.descriptionMobileTitle}>Описание</p>
            <Description />
          </div>
        </>
      )}
    </div>
  )
}
