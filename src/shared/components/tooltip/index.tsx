import React, {
  DetailedHTMLProps,
  ForwardedRef,
  forwardRef,
  HTMLAttributes,
  ReactNode,
} from "react"
import styles from "./styles.module.pcss"
import stylesPositions from "./positions.module.pcss"
import { useHover } from "~shared/hooks"
import { AnimatePresence, motion } from "framer-motion"
import clsx from "clsx"

interface Props
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode
  label: string | ReactNode
  keepLabelVisibleOnHover?: boolean
  width?: number
  withoutLabelBackground?: boolean
  /** label doesn't disappear on hover */
  position?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "bottomRight"
    | "topRight"
    | "bottomLeft"
    | "topLeft"
}

const Tooltip = forwardRef(
  (
    {
      children,
      label,
      keepLabelVisibleOnHover,
      position = "top",
      width,
      withoutLabelBackground,
      ...other
    }: Props,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [isHovered, hoveredProps] = useHover(50)

    return (
      <div
        className={styles.root}
        {...other}
        {...(keepLabelVisibleOnHover && hoveredProps)}
        ref={ref}
      >
        <div {...(!keepLabelVisibleOnHover && hoveredProps)}>{children}</div>
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{ width: width || "fit-content" }}
              className={clsx(
                styles.label,
                !withoutLabelBackground && styles.labelBackground,
                stylesPositions[position]
              )}
            >
              {label}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

export default Tooltip
