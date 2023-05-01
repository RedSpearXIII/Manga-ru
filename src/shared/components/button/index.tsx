import React, { ButtonHTMLAttributes, FC, ReactNode } from "react"
import { motion } from "framer-motion"
import styles from "./styles.module.pcss"
import clsx from "clsx"
import { ImSpinner9 } from "react-icons/all"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  isLoading?: boolean
}

const Button: FC<ButtonProps> = ({ children, isLoading, ...other }) => {
  return (
    <motion.button
      {...(other as any)}
      className={clsx(
        styles.button,
        isLoading && styles.buttonDisabled,
        other.className
      )}
      layout
      whileTap={{ y: 3 }}
      disabled={isLoading}
    >
      {isLoading && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{ scale: 1, opacity: 1 }}
          className={styles.loader}
        >
          <ImSpinner9 />
        </motion.div>
      )}
      <p>{children}</p>
    </motion.button>
  )
}

export default Button
