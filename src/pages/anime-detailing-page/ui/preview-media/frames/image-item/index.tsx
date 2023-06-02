import React from "react"
import styles from "./styles.module.pcss"
import loaderStyles from "../../styles.module.pcss"
import { useHover, useImageLoading } from "~shared/hooks"
import { HiMagnifyingGlass } from "react-icons/all"
import { AnimatePresence, motion } from "framer-motion"
import clsx from "clsx"

type Props = {
  src: string
  alt?: string
}

export const ImageItem = ({ src, alt }: Props) => {
  const [isHover, hoveredProps] = useHover()

  const { isLoaded, onLoad } = useImageLoading()
  return (
    <a {...hoveredProps} href={src} className={styles.imageContainer}>
      <img
        onLoad={onLoad}
        alt={alt}
        className={clsx(
          styles.image,
          isHover && "brightness-50",
          !isLoaded && "opacity-0"
        )}
        src={src}
      />
      <div
        className={clsx(
          loaderStyles.mediaLoader,
          "absolute left-0 top-0",
          isLoaded && "hidden"
        )}
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
    </a>
  )
}
