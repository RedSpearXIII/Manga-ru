import React from "react"
import styles from "./styles.module.pcss"
import { ImSpinner9 } from "react-icons/all"
import { motion } from "framer-motion"

const SuspensePageLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.container}
    >
      <img
        alt={"anifox logo"}
        src={"/anifox-logo-text.webp"}
        className={styles.img}
      />
      <ImSpinner9 className={styles.spinner} />
    </motion.div>
  )
}

export default SuspensePageLoader
