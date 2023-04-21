import React, { lazy, MouseEvent, Suspense, useRef, useState } from "react"
import { useOnClickOutside } from "~shared/hooks"
import styles from "./styles.module.pcss"
import { GoSettings } from "react-icons/all"
import { AnimatePresence } from "framer-motion"

const ExtraFilterDropdown = lazy(() => import("./extra-filter-dropdown"))

export const ExtraFilter = () => {
  const extraFilterRef = useRef(null)
  const [isOpened, setIsOpened] = useState(false)

  const onClickExtraFilterBtn = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsOpened(!isOpened)
  }
  const closeExtraFilter = () => {
    setIsOpened(false)
  }

  useOnClickOutside(extraFilterRef, closeExtraFilter)

  return (
    <div ref={extraFilterRef} className={styles.extraFilterContainer}>
      <div onClick={onClickExtraFilterBtn} className={styles.btn}>
        <GoSettings />
      </div>

      <AnimatePresence>
        {isOpened && (
          <Suspense>
            <ExtraFilterDropdown />
          </Suspense>
        )}
      </AnimatePresence>
    </div>
  )
}
