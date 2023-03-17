import React, {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  forwardRef,
  ForwardedRef,
} from "react"
import styles from "./styles.module.pcss"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: JSX.Element
  label?: string
  type?: HTMLInputTypeAttribute
}

const Input = forwardRef(
  (
    { icon: Icon, label, type, ...other }: InputProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={styles.inputContainer}>
        {label && <label>{label}</label>}
        <div>
          {Icon && Icon}
          <input ref={ref} type={type ? type : "text"} {...other} />
        </div>
      </div>
    )
  }
)

export default Input
