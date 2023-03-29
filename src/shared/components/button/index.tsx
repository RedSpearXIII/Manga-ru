import React, { FC, HTMLAttributes, ReactNode } from "react"
import { motion } from "framer-motion"
import styles from "./styles.module.pcss"
import clsx from "clsx"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, ...other }) => {
  return (
    <motion.button
      {...(other as any)}
      className={clsx(other.className, styles.button)}
      layout
      whileTap={{ y: 3 }}
    >
      {children}
    </motion.button>
  )
}

export default Button
