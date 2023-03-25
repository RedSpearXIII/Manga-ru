import React from "react"
import styles from "./styles.module.pcss"
import { useGetMangaById } from "~shared/api"
import { useParams } from "react-router-dom"
import { AddMangaToList } from "~features/add-manga-to-list"
import { AddMangaToFavorites } from "~features/add-manga-to-favorites"

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
            <div className={styles.actions}>
              <AddMangaToList />
              <AddMangaToFavorites />
            </div>
          </>
        )}
      </div>
      <div>
        <div className={styles.titleInfo}>
          {isLoading ? (
            <div className={styles.titleNameLoader} />
          ) : (
            <h4>{data.title}</h4>
          )}
          <div className={styles.titleDescription}>
            <h6>Описание</h6>
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
