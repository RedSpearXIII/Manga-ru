import React, { MouseEvent, useRef, useState } from "react"
import { useOnClickOutside } from "~shared/hooks"
import styles from "./styles.module.pcss"
import { AnimatePresence, motion } from "framer-motion"
import { GoSettings } from "react-icons/all"
import { RatingMpa } from "../rating-mpa"
import { Years } from "../years"

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
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className={styles.dropdown}
          >
            <div className={styles.filters}>
              <div className={styles.filter}>
                <RatingMpa />
              </div>
              <div className={styles.filter}>
                <Years />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
