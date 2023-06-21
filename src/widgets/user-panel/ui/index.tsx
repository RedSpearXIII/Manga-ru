import React from "react"
import styles from "./styles.module.pcss"
import { motion } from "framer-motion"
import { useHover } from "~shared/hooks"
import { BiChevronDown } from "react-icons/all"
import { Avatar } from "~shared/components"
import { Dropdown } from "./dropdown"

const chevronVariants = {
  open: { rotate: 0 },
  close: { rotate: 180 },
}

export const UserPanel = () => {
  const [isHover, hoverProps] = useHover(150)

  return (
    <div className={styles.panel} {...hoverProps}>
      <div className={styles.button}>
        <div>
          <Avatar />
        </div>

        <motion.div
          animate={isHover ? "open" : "close"}
          variants={chevronVariants}
        >
          <BiChevronDown size={24} />
        </motion.div>
      </div>

      <Dropdown isOpened={isHover} />
    </div>
  )
}
