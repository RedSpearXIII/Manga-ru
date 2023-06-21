import React, { useState } from "react"
import { RelatedMediaCard, RelatedMediaCardLoader } from "~entities/media"
import clsx from "clsx"
import styles from "~pages/manga-detailing-page/ui/similar-manga-list/styles.module.pcss"
import { Link } from "react-router-dom"
import { RelatedAnimeResponse } from "~shared/api"

type Props = {
  isLoading: boolean
  listData: RelatedAnimeResponse[]
  listType: "anime" | "manga"
}

export const RelatedMediaList = ({ listData, isLoading, listType }: Props) => {
  const [isShowAll, setIsShowAll] = useState(false)

  const closeList = () => {
    setIsShowAll(false)
  }
  const toggleShow = () => {
    setIsShowAll((prev) => !prev)
  }

  const loader = Array.from({ length: 5 }, (_, index) => (
    <RelatedMediaCardLoader key={index} />
  ))
  return (
    <div>
      <div className={"w-full flex items-center justify-between"}>
        <h3>Хронология</h3>
        {listData && (
          <p
            onClick={toggleShow}
            className={clsx(
              styles.listShowToggler,
              listData.length <= 10 && "2xl:hidden",
              listData.length <= 8 && "xl:hidden",
              listData.length <= 6 && "lg:hidden",
              listData.length <= 4 && "sm:hidden",
              listData.length <= 2 && "hidden"
            )}
          >
            {isShowAll ? "Скрыть" : "Показать всё"}
          </p>
        )}
      </div>
      <div className={clsx(!isShowAll && styles.listClosed)}>
        <div className={styles.list}>
          {isLoading ? (
            loader
          ) : (
            <>
              {listData.map(({ related, anime }) => (
                <Link
                  onClick={closeList}
                  key={anime.url}
                  to={`/${listType}/title/${anime.url}`}
                >
                  <RelatedMediaCard
                    year={anime.year}
                    title={anime.title}
                    image={anime.image}
                    relationType={related.type}
                    type={anime.type}
                    episodesCount={anime.episodesCount}
                  />
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
