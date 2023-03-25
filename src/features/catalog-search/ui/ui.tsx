import React, { useEffect, useRef } from "react"
import styles from "./styles.module.pcss"
import { FaSearch } from "react-icons/all"
import { AnimatePresence, motion } from "framer-motion"
import { useCatalogSearchStore } from "~features/catalog-search/model"
import { Input, Portal } from "~shared/components"

const CatalogSearch = () => {
  const { query, setQuery, searchOpen, toggleSearchOpen } =
    useCatalogSearchStore((state) => state)

  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (searchInputRef && searchInputRef.current && searchOpen)
      searchInputRef.current.focus()
  }, [searchOpen])

  return (
    <>
      <div onClick={toggleSearchOpen} className={styles.searchButton}>
        <FaSearch />
        <p>Поиск</p>
      </div>
      <Portal>
        <AnimatePresence>
          {searchOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={toggleSearchOpen}
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
                    onChange={(e) => setQuery(e.currentTarget.value)}
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
