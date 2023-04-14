import React from "react"
import styles from "./styles.module.pcss"
import { AiFillHeart } from "react-icons/all"
import { motion } from "framer-motion"

export const AddMangaToFavorites = () => {
  return (
    <motion.div className={styles.button} whileTap={{ scale: 0.9 }}>
      <AiFillHeart />
    </motion.div>
  )
}
