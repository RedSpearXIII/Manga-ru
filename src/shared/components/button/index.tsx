import React, { FC, HTMLAttributes, ReactNode } from "react"
import { motion } from "framer-motion"

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, color, ...other }) => {
  return (
    <motion.div layout whileTap={{ y: 3 }}>
      <button {...other}>{children}</button>
    </motion.div>
  )
}

export default Button
