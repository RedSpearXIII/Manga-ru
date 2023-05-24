import React, { useEffect, useRef, useState } from "react"
import styles from "./styles.module.pcss"
import loaderStyles from "../../styles.module.pcss"
import { useHover, useImageLoading } from "~shared/hooks"
import { HiMagnifyingGlass } from "react-icons/all"
import { AnimatePresence, motion, useInView } from "framer-motion"
import clsx from "clsx"

type Props = {
  src: string
  onClick: () => void
}

export const ImageItem = ({ src, onClick }: Props) => {
  const [isHover, hoveredProps] = useHover()
  const [imgSrc, setImgSrc] = useState<string | undefined>(undefined)
  const imgRef = useRef(null)

  const imgInView = useInView(imgRef, {
    margin: "0px 50px 0px 0px",
    once: true,
  })

  useEffect(() => {
    if (imgInView && !imgSrc) {
      setImgSrc(src)
    }
  }, [imgInView])

  const { onLoad, isLoaded } = useImageLoading()

  return (
    <div {...hoveredProps} onClick={onClick} className={styles.imageContainer}>
      {!isLoaded && <div className={loaderStyles.mediaLoader} />}
      <img
        ref={imgRef}
        onLoad={onLoad}
        alt={"Ошибка при загрузке"}
        className={clsx(styles.image, isHover && "brightness-50")}
        src={imgSrc}
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
