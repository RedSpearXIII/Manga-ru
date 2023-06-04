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
import { FavoriteListButtons } from "~entities/favorite-media/favorite-list-buttons"
import { AnimeRating } from "./anime-rating"

export const AnimeContent = () => {
  const { animeUrl } = useParams()
  const { data, isLoading } = useGetAnimeByUrl({ animeUrl: animeUrl! })
  const { screenWidth } = useScreenSize()

  if (!data && !isLoading) return <h1>Error</h1>
  if (!data && isLoading) return <h1>loading</h1>

  return (
    <div className={styles.bg}>
      <BgImage />
      <div className={styles.content}>
        <div className={styles.poster}>
          {isLoading ? (
            <div className={styles.imageLoader} />
          ) : (
            <img
              className={styles.image}
              src={data.image}
              alt={"Постер аниме"}
            />
          )}
          {!isLoading && (
            <span className={styles.minimalAgeBadge}>
              <Badge className={"bg-orange-300"}>
                {data.minimalAge ? `${data.minimalAge}+` : data.ratingMpa}
              </Badge>
            </span>
          )}
          {screenWidth >= Breakpoints.lg && <FavoriteListButtons />}
        </div>

        <div className={styles.rightBlock}>
          {isLoading ? (
            <div className={styles.topSectionLoader} />
          ) : (
            <div className={styles.topSection}>
              <div className={"w-fit"}>
                <AnimeRating animeRating={data.rating} />
              </div>
              <div className={styles.topSectionTitle}>
                <h1>{data.title}</h1>
              </div>

              {screenWidth < Breakpoints.lg && <FavoriteListButtons />}
            </div>
          )}
          {screenWidth >= Breakpoints.lg && (
            <>
              <Info />
              <Description />
            </>
          )}
        </div>
      </div>
      {screenWidth < Breakpoints.lg && (
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
