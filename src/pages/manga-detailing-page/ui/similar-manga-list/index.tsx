import React, { useState } from "react"
import { useGetMangaSimilar } from "~shared/api"
import { Link, useParams } from "react-router-dom"
import { SimilarMangaCard, SimilarMangaCardLoader } from "~entities/manga"
import styles from "./styles.module.pcss"
import clsx from "clsx"

const SimilarMangaList = () => {
  const { mangaId } = useParams()

  const [isShowAll, setIsShowAll] = useState(false)

  const toggleShow = () => {
    setIsShowAll((prev) => !prev)
  }

  const { data, isLoading } = useGetMangaSimilar({
    mangaId: mangaId!,
  })

  if (!data && !isLoading) return <p>Error</p>

  if (!isLoading && data && data.length === 0) return null

  const loader = Array.from({ length: 10 }, (_, index) => (
    <SimilarMangaCardLoader key={index} />
  ))

  return (
    <div className={"container mx-auto mt-6"}>
      <h5>Похожие тайтлы</h5>
      <div className={clsx(!isShowAll && styles.listClosed)}>
        <div className={styles.list}>
          {isLoading ? (
            loader
          ) : (
            <>
              {data.map((manga) => (
                <Link to={`/manga/title/${manga.id}`}>
                  <SimilarMangaCard
                    key={manga.id}
                    id={manga.id}
                    title={manga.title}
                    image={manga.image}
                  />
                </Link>
              ))}
            </>
          )}
        </div>
      </div>
      <p onClick={toggleShow} className={styles.listShowToggler}>
        {isShowAll ? "Скрыть" : "Показать всё"}
      </p>
    </div>
  )
}

export default SimilarMangaList
