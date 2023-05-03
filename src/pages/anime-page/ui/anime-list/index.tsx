import React, { Fragment, Suspense, useEffect, useRef } from "react"
import styles from "./styles.module.pcss"
import { shallow } from "zustand/shallow"
import { BiError, FaSadCry } from "react-icons/all"
import { MediaCardSkeleton } from "~entities/media"
import { useGetAnimeList } from "~shared/api"
import { useAnimeListFilterStore } from "~features/anime-list-filter"
import { AnimeCard } from "~widgets/anime-card"
import { useInView } from "framer-motion"

export const AnimeList = () => {
  const lastElementRef = useRef(null)
  const lastElementInView = useInView(lastElementRef)

  const {
    searchQuery,
    genres,
    minimalAge,
    ratingMpa,
    orderBy,
    season,
    status,
    type,
    years,
    translations,
  } = useAnimeListFilterStore((state) => state, shallow)

  const {
    data,
    isLoading,
    error,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGetAnimeList({
    pageSize: 30,
    searchQuery,
    genres: genres.map(({ id }) => id),
    translations: translations.map(({ id }) => id.toString()),
    status,
    season,
    ratingMpa,
    minimalAge,
    order: orderBy,
    type,
    years,
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
            {group.map((anime) => (
              <AnimeCard anime={anime} key={anime.url} />
            ))}
          </Fragment>
        ))
      : Array.from({ length: 20 }, (_, index) => (
          <MediaCardSkeleton key={index} />
        ))

  if (error)
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
  if (data?.pages[0].length === 0)
    return (
      <Suspense>
        <div className={styles.notFound}>
          <FaSadCry />
          <div>
            <p>
              Мы ничего не нашли :( <br />
            </p>
            <p>попробуйте другие фильтры</p>
          </div>
        </div>
      </Suspense>
    )

  return (
    <div className={"container mx-auto"}>
      <div className={styles.list}>
        {cards}
        {isFetchingNextPage && hasNextPage && loaders}
        <span ref={lastElementRef} />
      </div>
    </div>
  )
}
