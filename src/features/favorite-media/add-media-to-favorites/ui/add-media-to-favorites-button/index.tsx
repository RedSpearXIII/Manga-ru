import React from "react"
import { motion } from "framer-motion"
import styles from "./styles.module.pcss"
import { AiFillHeart } from "react-icons/all"

export const AddMediaToFavoritesButton = () => {
  return (
    <motion.div className={styles.likeButton} whileTap={{ scale: 0.9 }}>
      <AiFillHeart />
    </motion.div>
  )
}
