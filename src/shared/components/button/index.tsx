import React, { FC, HTMLAttributes, ReactNode } from "react"
import { motion } from "framer-motion"
import styles from "./styles.module.pcss"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, ...other }) => {
  return (
    <motion.button
      className={styles.button}
      {...(other as any)}
      layout
      whileTap={{ y: 3 }}
    >
      {children}
    </motion.button>
  )
}

export default Button
