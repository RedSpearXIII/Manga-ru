import React, { ReactNode } from "react"
import { Portal } from "~shared/components"
import styles from "./styles.module.pcss"
import { AnimatePresence, motion } from "framer-motion"
import { BiMinus } from "react-icons/all"
import { dropIn, modalDropIn } from "./variants"
import { useDisableScroll } from "~shared/hooks"

type Props = {
  isOpened: boolean
  onClose: () => void
  children: ReactNode
  title?: string
}

const Modal = ({ children, onClose, isOpened, title }: Props) => {
  useDisableScroll(isOpened)

  return (
    <AnimatePresence>
      {isOpened && (
        <Portal>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={dropIn}
            className={styles.backdrop}
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          />
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalDropIn}
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.topBar}>
              <p>{title}</p>
              <div className={styles.closeBtn} onClick={onClose}>
                <BiMinus />
              </div>
            </div>
            <div className={styles.content}>{children}</div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  )
}

export default Modal
