import React from "react"
import { shallow } from "zustand/shallow"
import { FaTags, GrFormClose } from "react-icons/all"
import styles from "./styles.module.pcss"
import { Badge } from "~shared/components"
import { useHover } from "~shared/hooks"
import { AnimatePresence, motion } from "framer-motion"
import { useAnimeListFilterStore } from "~features/anime-list-filter"

export const FilterTags = () => {
  const [isHovered, hoveredProps] = useHover()

  const {
    orderBy,
    genres,
    ratingMpa,
    status,
    season,
    searchQuery,
    type,
    minimalAge,
    setSearchQuery,
    setRatingMpa,
    resetFilter,
    removeGenre,
    setStatus,
    setSeason,
    setType,
    setMinimalAge,
    years,
    removeYear,
  } = useAnimeListFilterStore((state) => state, shallow)

  const resetSearchFilter = () => {
    setSearchQuery("")
  }
  const removeGenreFilter = (id: string) => {
    removeGenre(id)
  }
  const removeStatusFilter = () => {
    setStatus(null)
  }
  const removeRatingMpaFilter = () => {
    setRatingMpa(null)
  }
  const removeSeasonFilter = () => {
    setSeason(null)
  }

  const removeTypeFilter = () => {
    setType(null)
  }

  const removeMinimalAgeFilter = () => {
    setMinimalAge(null)
  }

  const removeYearItem = (year: string) => {
    removeYear(year)
  }

  const filterIsActive = !!(
    orderBy ||
    status ||
    searchQuery ||
    ratingMpa ||
    genres.length > 0 ||
    status ||
    season ||
    type ||
    minimalAge !== null ||
    years.length > 0
  )
  if (!filterIsActive) return null

  return (
    <div className={styles.filterTags} {...hoveredProps}>
      <div>
        <FaTags size={24} />
      </div>

      <div className={styles.tags}>
        {searchQuery && (
          <div onClick={resetSearchFilter} className={styles.tagItem}>
            <Badge className={"bg-red-400"}>
              <div className={styles.content}>
                Поиск: {searchQuery} <GrFormClose />
              </div>
            </Badge>
          </div>
        )}
        {ratingMpa && (
          <div onClick={removeRatingMpaFilter} className={styles.tagItem}>
            <Badge className={"bg-orange-400 dark:bg-orange-300"}>
              <div className={styles.content}>
                MPA: {ratingMpa} <GrFormClose />
              </div>
            </Badge>
          </div>
        )}
        {genres.length > 0 && (
          <>
            {genres.map((genre) => (
              <div
                key={genre.id}
                onClick={() => removeGenreFilter(genre.id)}
                className={styles.tagItem}
              >
                <Badge className={"bg-blue-400"}>
                  <div className={styles.content}>
                    {genre.genre} <GrFormClose />
                  </div>
                </Badge>
              </div>
            ))}
          </>
        )}
        {status && (
          <div onClick={removeStatusFilter} className={styles.tagItem}>
            <Badge className={"bg-purple-400"}>
              <div className={styles.content}>
                {status === "ongoing" ? "Онгоинг" : "Выпущен"} <GrFormClose />
              </div>
            </Badge>
          </div>
        )}
        {season && (
          <div onClick={removeSeasonFilter} className={styles.tagItem}>
            <Badge className={"bg-emerald-400"}>
              <div className={styles.content}>
                {season === "Fall" && "Осень"}
                {season === "Spring" && "Весна"}
                {season === "Winter" && "Зима"}
                {season === "Summer" && "Лето"}
                <GrFormClose />
              </div>
            </Badge>
          </div>
        )}
        {type && (
          <div onClick={removeTypeFilter} className={styles.tagItem}>
            <Badge className={"bg-pink-400"}>
              <div className={styles.content}>
                {type === "movie" && "Фильм"}
                {type === "ona" && "Ona"}
                {type === "ova" && "Ova"}
                {type === "music" && "Музыкальный"}
                {type === "special" && "Специальный"}
                {type === "tv" && "Телесериал"}
                <GrFormClose />
              </div>
            </Badge>
          </div>
        )}
        {minimalAge !== null && (
          <div onClick={removeMinimalAgeFilter} className={styles.tagItem}>
            <Badge className={"bg-cyan-500"}>
              <div className={styles.content}>
                {`${minimalAge}+`}
                <GrFormClose />
              </div>
            </Badge>
          </div>
        )}
        {years.length > 0 && (
          <>
            {years.map((year) => (
              <div
                key={year}
                onClick={() => removeYearItem(year)}
                className={styles.tagItem}
              >
                <Badge className={"bg-rose-500"}>
                  <div className={styles.content}>
                    {year} г. <GrFormClose />
                  </div>
                </Badge>
              </div>
            ))}
          </>
        )}

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={resetFilter}
              className={styles.tagItem}
            >
              <Badge className={"bg-slate-700"}>
                <div className={styles.content}>
                  Очистить всё <GrFormClose />
                </div>
              </Badge>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
