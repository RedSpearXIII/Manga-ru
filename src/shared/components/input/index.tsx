import React, {
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  forwardRef,
  ForwardedRef,
  DetailedHTMLProps,
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
  label?: string
  type?: HTMLInputTypeAttribute
  size?: UiSizes
}

const Input = forwardRef(
  (
    { icon: Icon, label, type, size, ...other }: Props,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <div className={clsx(styles.inputContainer, size && sizeStyles[size])}>
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
