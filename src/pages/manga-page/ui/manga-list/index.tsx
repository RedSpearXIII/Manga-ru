import React, { Fragment, useEffect, useRef } from "react"
import styles from "./styles.module.pcss"
import { useGetMangaList } from "~shared/api"
import {
  MangaListFilter,
  mangaListFilterModel,
} from "~features/manga-list-filter"
import { BiError } from "react-icons/all"
import { MediaCard, MediaCardSkeleton } from "~entities/media"
import { useInView } from "framer-motion"
import { useStore } from "effector-react"

export const MangaList = () => {
  const lastElementRef = useRef(null)
  const lastElementInView = useInView(lastElementRef)

  const { searchQuery } = useStore(mangaListFilterModel.$mangaListFilter)

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetMangaList({
    pageSize: 30,
    searchQuery,
  })

  useEffect(() => {
    if (lastElementInView && !isFetchingNextPage && hasNextPage) fetchNextPage()
  }, [lastElementInView])

  const loaders = Array.from({ length: 6 }, (_, index) => (
    <MediaCardSkeleton key={index} />
  ))

  const cards =
    data && !isLoading
      ? data.pages.map((group, index) => (
          <Fragment key={index}>
            {group.map((manga) => (
              <MediaCard type={"manga"} key={manga.id} media={manga} />
            ))}
          </Fragment>
        ))
      : Array.from({ length: 20 }, (_, index) => (
          <MediaCardSkeleton key={index} />
        ))

  if (isError)
    return (
      <div className={styles.error}>
        <BiError />
        <div>
          <p>
            На нашем сервере произошла ошибочка :( <br />
          </p>
          <p>попробуйте перезагрузить страницу</p>
        </div>
      </div>
    )

  return (
    <div className={"container mx-auto"}>
      <MangaListFilter />
      <div className={styles.list}>
        {cards.length > 0 ? cards : <div></div>}
        {isFetchingNextPage && hasNextPage && loaders}
        <span ref={lastElementRef} />
      </div>
    </div>
  )
}
