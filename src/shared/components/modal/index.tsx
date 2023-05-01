import React, { ReactNode, useEffect } from "react"
import { Portal } from "~shared/components"
import styles from "./styles.module.pcss"
import { AnimatePresence, motion } from "framer-motion"
import { BiMinus } from "react-icons/all"
import { dropIn, modalDropIn } from "./variants"

type Props = {
  isOpened: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

const Modal = ({ children, onClose, isOpened, title }: Props) => {
  useEffect(() => {
    document.body.style.overflowY = isOpened ? "hidden" : "auto"
  }, [isOpened])

  return (
    <AnimatePresence initial={false}>
      {isOpened && (
        <Portal>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropIn}
            className={styles.backdrop}
            onClick={onClose}
          >
            <motion.div
              onClick={(e) => {
                e.stopPropagation()
              }}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalDropIn}
              className={styles.modal}
            >
              <div className={styles.topBar}>
                <p>{title}</p>
                <div className={styles.closeBtn} onClick={onClose}>
                  <BiMinus />
                </div>
              </div>
              <div className={styles.content}>{children}</div>
            </motion.div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  )
}

export default Modal
