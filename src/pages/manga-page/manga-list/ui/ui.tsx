import React, { Fragment, useEffect } from "react"
import styles from "./styles.module.pcss"
import usePageOffset from "~shared/hooks/usePageOffset"
import { useGetMangaList } from "~shared/api"
import {
  MangaListFilter,
  useMangaListFilterStore,
} from "~features/manga-list-filter"
import { shallow } from "zustand/shallow"
import { BiError } from "react-icons/all"
import { MediaCard, MediaCardSkeleton } from "~entities/media"

export const MangaList = () => {
  const { searchQuery } = useMangaListFilterStore((state) => state, shallow)

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

  const { y } = usePageOffset()

  const bottomScrollPosition =
    y + window.innerHeight + 400 - document.body.scrollHeight

  useEffect(() => {
    if (hasNextPage && bottomScrollPosition >= 0) {
      fetchNextPage()
    }
  }, [bottomScrollPosition >= 0])

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
      </div>
    </div>
  )
}
