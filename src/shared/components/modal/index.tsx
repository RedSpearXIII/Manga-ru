import React, { ReactNode } from "react"
import { Portal } from "~shared/components"
import styles from "./styles.module.pcss"
import { AnimatePresence, motion } from "framer-motion"
import { BiMinus } from "react-icons/all"
import { modalAnimateVariants } from "./variants"
import { useDisableScroll } from "~shared/hooks"
import clsx from "clsx"

type Props = {
  isOpened: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  centered?: boolean
  width?: number
}

const Modal = ({
  children,
  onClose,
  isOpened,
  centered,
  title,
  width,
}: Props) => {
  useDisableScroll(isOpened)

  return (
    <AnimatePresence>
      {isOpened && (
        <Portal>
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalAnimateVariants}
            className={clsx(styles.backdrop, centered && "items-center")}
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          >
            <div
              style={{ ...(width && { maxWidth: width }) }}
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
            </div>
          </motion.div>
        </Portal>
      )}
    </AnimatePresence>
  )
}

export default Modal
