import { motion } from "framer-motion"
import React from "react"
import useMousePosition from "../../hooks/useMousePosition"
import styles from "./styles.module.pcss"
import playIcon from "./assets/play.webp"
import searchIcon from "./assets/search.jpg"
import bookIcon from "./assets/book.png"
import Portal from "~components/portal"

const SitePresentationFigures = () => {
  const [x, y] = useMousePosition()

  const translateX = (x / window.innerWidth) * 100
  const translateY = (y / window.innerHeight) * 100

  return (
    <Portal>
      <div className={styles.icons}>
        <motion.div
          animate={{ translateX, translateY, rotateZ: -translateX }}
          transition={{ type: "spring" }}
          className={styles.icon}
        >
          <img src={playIcon} alt={"play-icon"} />
        </motion.div>
        <motion.div
          animate={{ translateX, translateY, rotateZ: translateX }}
          transition={{ type: "spring" }}
          className={styles.icon}
        >
          <img src={searchIcon} alt={"play-icon"} />
        </motion.div>
        <motion.div
          animate={{ translateX, translateY }}
          transition={{ type: "spring" }}
          className={styles.icon}
        >
          <img src={bookIcon} alt={"play-icon"} />
        </motion.div>
      </div>
    </Portal>
  )
}

export default SitePresentationFigures
