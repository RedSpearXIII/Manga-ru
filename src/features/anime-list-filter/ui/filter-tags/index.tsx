import React from "react"
import { shallow } from "zustand/shallow"
import { FaTags, GrFormClose } from "react-icons/all"
import styles from "./styles.module.pcss"
import { Badge } from "~shared/components"
import useHover from "~shared/hooks/useHover"
import { AnimatePresence, motion } from "framer-motion"
import { useAnimeListFilterStore } from "~features/anime-list-filter"

export const FilterTags = () => {
  const [isHovered, hoveredProps] = useHover()

  const {
    orderBy,
    genres,
    ratingMpa,
    status,
    searchQuery,
    setSearchQuery,
    setRatingMpa,
    resetFilter,
    removeGenre,
    setStatus,
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

  const filterIsActive = !!(
    orderBy ||
    status ||
    searchQuery ||
    ratingMpa ||
    genres.length > 0 ||
    status
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
            <Badge className={"bg-blue-400"}>
              <div className={styles.content}>
                {status === "ongoing" ? "Онгоинг" : "Выпущен"} <GrFormClose />
              </div>
            </Badge>
          </div>
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
