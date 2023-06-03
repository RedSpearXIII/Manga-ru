import React from "react"
import { mangaListFilterModel } from "~features/manga-list-filter"
import { FaTags, GrFormClose } from "react-icons/all"
import styles from "./styles.module.pcss"
import { Badge } from "~shared/components"
import { useHover } from "~shared/hooks"
import { AnimatePresence, motion } from "framer-motion"
import { useStore } from "effector-react"

export const FilterTags = () => {
  const [isHovered, hoveredProps] = useHover()

  const searchQuery = useStore(mangaListFilterModel.$searchQuery)

  const resetSearchFilter = () => {
    mangaListFilterModel.setSearchQuery({ queryString: "" })
  }

  if (mangaListFilterModel.$filterIsActive) return null

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
              onClick={() => mangaListFilterModel.resetFilter()}
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
