import React, { FC } from "react"
import styles from "./styles.module.pcss"
import loaderStyles from "../../styles.module.pcss"
import { useHover, useImageLoading } from "~shared/hooks"
import { HiMagnifyingGlass } from "react-icons/all"
import { AnimatePresence, motion } from "framer-motion"
import clsx from "clsx"

interface ImageItemProps {
  src: string
  onClick: () => void
}

export const ImageItem: FC<ImageItemProps> = ({ src, onClick }) => {
  const [isHover, hoveredProps] = useHover()

  const { onLoad, isLoaded } = useImageLoading()

  return (
    <div {...hoveredProps} onClick={onClick} className={styles.imageContainer}>
      {!isLoaded && <div className={loaderStyles.mediaLoader} />}
      <img
        onLoad={onLoad}
        alt={"Ошибка при загрузке"}
        className={clsx(styles.image, isHover && "brightness-50")}
        src={src}
      />
      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            className={styles.icon}
          >
            <HiMagnifyingGlass />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
