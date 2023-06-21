import React, { lazy, MouseEvent, Suspense, useRef } from "react"
import { useOnClickOutside, useScreenSize } from "~shared/hooks"
import styles from "./styles.module.pcss"
import { GoSettings } from "react-icons/all"
import { animeListExtraFilterModel } from "~features/anime-list-filter"
import { Breakpoints } from "~shared/types"
import { AnimatePresence } from "framer-motion"
import clsx from "clsx"
import { useStore } from "effector-react"

const ExtraFilterDropdown = lazy(() =>
  import("./extra-filter-dropdown").then((module) => ({
    default: module.ExtraFilterDropdown,
  }))
)

export const ExtraFilter = () => {
  const { screenWidth } = useScreenSize()

  const extraFilterRef = useRef(null)
  const { isOpened } = useStore(animeListExtraFilterModel.$extraFilterStore)

  const onClickExtraFilterBtn = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    animeListExtraFilterModel.setIsOpened(!isOpened)
  }
  const closeExtraFilter = () => {
    if (screenWidth >= Breakpoints.xxl) {
      animeListExtraFilterModel.setIsOpened(false)
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

      {screenWidth >= Breakpoints.xxl && (
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
