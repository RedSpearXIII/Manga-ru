import React from "react"
import styles from "./styles.module.pcss"
import { useGetMangaById } from "~shared/api"
import { useParams } from "react-router-dom"
import { FavoriteListButtons } from "~entities/favorite-media/favorite-list-buttons"

export const MangaContent = () => {
  const { mangaId } = useParams()

  const { data, isLoading } = useGetMangaById({ mangaId: mangaId! })

  if (!data && !isLoading) return <h1>Error</h1>

  return (
    <div className={styles.content}>
      <div>
        {isLoading ? (
          <div className={styles.titleImageLoader} />
        ) : (
          <>
            <img
              className={styles.titleImage}
              src={data?.image}
              alt={"title-image"}
            />
            <FavoriteListButtons />
          </>
        )}
      </div>
      <div>
        <div className={styles.titleInfo}>
          {isLoading ? (
            <div className={styles.titleNameLoader} />
          ) : (
            <h1>{data.title}</h1>
          )}
          <div className={styles.titleDescription}>
            <h3>Описание</h3>
            {isLoading ? (
              <div className={styles.descriptionLoader} />
            ) : (
              <p dangerouslySetInnerHTML={{ __html: data.description }} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
