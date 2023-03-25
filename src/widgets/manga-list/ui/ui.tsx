import React, { Fragment, useEffect } from "react"
import styles from "./styles.module.pcss"
import { useGetMangaList } from "~widgets/manga-list"
import { MediaCard, MediaCardSkeleton } from "~entities/manga/manga-card"
import usePageOffset from "../../../shared/hooks/usePageOffset"

export const MangaList = () => {
  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetMangaList({
    pageSize: 30,
  })

  const { y } = usePageOffset()

  const bottomScrollPosition =
    y + window.innerHeight + 400 - document.body.scrollHeight

  useEffect(() => {
    if (hasNextPage && bottomScrollPosition >= 0) {
      fetchNextPage()
    }
  }, [bottomScrollPosition >= 0])

  if (error) return <h1>Error</h1>
  const loaders = Array.from({ length: 6 }, (_, index) => (
    <MediaCardSkeleton key={index} />
  ))

  const cards =
    data && !isLoading
      ? data.pages.map((group, index) => (
          <Fragment key={index}>
            {group.map((manga) => (
              <MediaCard key={manga.id} manga={manga} />
            ))}
          </Fragment>
        ))
      : Array.from({ length: 20 }, (_, index) => (
          <MediaCardSkeleton key={index} />
        ))

  return (
    <div className={"container mx-auto"}>
      <div className={styles.list}>
        {cards}
        {isFetchingNextPage && hasNextPage && loaders}
      </div>
    </div>
  )
}
