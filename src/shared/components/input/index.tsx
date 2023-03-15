import React, { FC, HTMLAttributes, HTMLInputTypeAttribute } from "react"
import styles from "./styles.module.pcss"

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element
  label?: string
  type?: HTMLInputTypeAttribute
}

const Input: FC<InputProps> = ({ icon: Icon, label, type, ...other }) => {
  return (
    <div className={styles.inputContainer}>
      {label && <label>{label}</label>}
      <div>
        {Icon && Icon}
        <input type={type ? type : "text"} {...other} />
      </div>
    </div>
  )
}

export default Input
