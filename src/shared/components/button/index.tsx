import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  ReactNode,
} from "react"
import { motion } from "framer-motion"
import styles from "./styles.module.pcss"
import colorStyles from "./colors.module.pcss"
import clsx from "clsx"
import { ImSpinner9 } from "react-icons/all"
import { UiColors } from "~shared/types/ui-colors"

interface Props
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode
  isLoading?: boolean
  icon?: ReactNode
  rightIcon?: ReactNode
  color?: UiColors
}

const Button = forwardRef(
  (
    { children, isLoading, icon, color = "orange", rightIcon, ...other }: Props,
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <motion.button
        ref={ref}
        {...(other as any)}
        className={clsx(
          styles.button,
          !isLoading && styles.buttonDisabled,
          other.className,
          colorStyles[color]
        )}
        layout
        whileTap={{ y: 3 }}
        disabled={isLoading}
      >
        <div className={styles.buttonContent}>
          {isLoading ? (
            <motion.div
              initial={{ scale: 0.8, opacity: 0.3 }}
              animate={{ scale: 1, opacity: 1 }}
              className={styles.loader}
            >
              <ImSpinner9 />
            </motion.div>
          ) : (
            icon && <div className={styles.icon}>{icon}</div>
          )}
          <p className={styles.buttonText}>{children}</p>
          {rightIcon && <div className={styles.icon}>{rightIcon}</div>}
        </div>
      </motion.button>
    )
  }
)

export default Button
