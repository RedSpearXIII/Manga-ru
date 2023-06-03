import React, { useEffect, useRef } from "react"
import styles from "./styles.module.pcss"
import { FaSearch } from "react-icons/all"
import { AnimatePresence, motion } from "framer-motion"
import { catalogSearchModel } from "~features/catalog-search/model"
import { Input, Portal } from "~shared/components"
import { useDisableScroll } from "~shared/hooks"
import { useStore } from "effector-react"

const CatalogSearch = () => {
  const { query, searchIsOpen } = useStore(catalogSearchModel.$catalogSearch)

  const searchInputRef = useRef<HTMLInputElement>(null)

  useDisableScroll(searchIsOpen)

  useEffect(() => {
    if (searchInputRef && searchInputRef.current && searchIsOpen)
      searchInputRef.current.focus()
  }, [searchIsOpen])

  return (
    <>
      <div
        onClick={() => catalogSearchModel.toggleSearchOpen()}
        className={styles.searchButton}
      >
        <FaSearch />
      </div>
      <Portal>
        <AnimatePresence>
          {searchIsOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => catalogSearchModel.toggleSearchOpen()}
                className={styles.searchOverlay}
              />
              <div className={styles.search}>
                <motion.div
                  initial={{ y: -100, width: "0%" }}
                  animate={{ y: 0, width: "100%" }}
                  exit={{ y: -100 }}
                >
                  <Input
                    ref={searchInputRef}
                    value={query}
                    onChange={(e) =>
                      catalogSearchModel.setQuery(e.currentTarget.value)
                    }
                    placeholder={"Поиск AniFox"}
                    icon={<FaSearch />}
                  />
                </motion.div>
              </div>
            </>
          )}
        </AnimatePresence>
      </Portal>
    </>
  )
}

export default CatalogSearch
