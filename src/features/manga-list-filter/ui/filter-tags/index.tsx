import React from "react"
import { useMangaListFilterStore } from "~features/manga-list-filter"
import { shallow } from "zustand/shallow"
import { FaTags, GrFormClose } from "react-icons/all"
import styles from "./styles.module.pcss"
import { Badge } from "~shared/components"
import useHover from "~shared/hooks/useHover"
import { AnimatePresence, motion } from "framer-motion"

export const FilterTags = () => {
  const [isHovered, hoveredProps] = useHover()

  const { orderBy, status, searchQuery, setSearchQuery, resetFilter } =
    useMangaListFilterStore((state) => state, shallow)

  const resetSearchFilter = () => {
    setSearchQuery("")
  }

  const filterIsActive = !!(orderBy || status || searchQuery)
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
