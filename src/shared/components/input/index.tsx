import React, {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  forwardRef,
  ForwardedRef,
  DetailedHTMLProps,
  ReactNode,
} from "react"
import styles from "./styles.module.pcss"
import sizeStyles from "./sizes.module.pcss"
import { UiSizes } from "~shared/types"
import clsx from "clsx"

interface Props
  extends DetailedHTMLProps<
    Omit<InputHTMLAttributes<HTMLInputElement>, "size">,
    HTMLInputElement
  > {
  icon?: JSX.Element
  rightIcon?: JSX.Element | false
  label?: string | ReactNode
  type?: HTMLInputTypeAttribute
  size?: UiSizes
}

const Input = forwardRef(
  (
    { icon: Icon, rightIcon: RightIcon, label, type, size, ...other }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={clsx(styles.inputContainer, size && sizeStyles[size])}>
        {label && <label>{label}</label>}
        <div className={styles.input}>
          {Icon && <span className={styles.icon}>{Icon}</span>}
          <input ref={ref} type={type ? type : "text"} {...other} />
          {RightIcon && <span className={styles.rightIcon}>{RightIcon}</span>}
        </div>
      </div>
    )
  }
)

export default Input
