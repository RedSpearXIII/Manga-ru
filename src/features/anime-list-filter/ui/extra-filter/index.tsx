import React, { lazy, MouseEvent, Suspense, useRef } from "react"
import { useOnClickOutside, useScreenSize } from "~shared/hooks"
import styles from "./styles.module.pcss"
import { GoSettings } from "react-icons/all"
import { useExtraFilterStore } from "~features/anime-list-filter"
import { shallow } from "zustand/shallow"
import { Breakpoints } from "~shared/types"
import { AnimatePresence } from "framer-motion"
import clsx from "clsx"

const ExtraFilterDropdown = lazy(() =>
  import("./extra-filter-dropdown").then((module) => ({
    default: module.ExtraFilterDropdown,
  }))
)

export const ExtraFilter = () => {
  const screenSize = useScreenSize()

  const extraFilterRef = useRef(null)
  const { isOpened, setIsOpened } = useExtraFilterStore(
    (state) => state,
    shallow
  )

  const onClickExtraFilterBtn = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsOpened(!isOpened)
  }
  const closeExtraFilter = () => {
    if (screenSize >= Breakpoints.xxl) {
      setIsOpened(false)
    }
  }

  useOnClickOutside(extraFilterRef, closeExtraFilter)

  return (
    <div ref={extraFilterRef} className={styles.extraFilterContainer}>
      <div
        onClick={onClickExtraFilterBtn}
        className={clsx(styles.btn, isOpened && styles.btnActive)}
      >
        <GoSettings />
      </div>

      {screenSize >= Breakpoints.xxl && (
        <AnimatePresence>
          {isOpened && (
            <Suspense>
              <ExtraFilterDropdown />
            </Suspense>
          )}
        </AnimatePresence>
      )}
    </div>
  )
}
