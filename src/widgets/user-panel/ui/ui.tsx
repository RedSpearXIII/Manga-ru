import React from "react"
import styles from "./styles.module.pcss"
import Avatar from "~components/avatar"
import { AnimatePresence, motion } from "framer-motion"
import useHover from "../../../shared/hooks/useHover"
import { BiChevronDown } from "react-icons/all"
import { ToggleTheme } from "~features/toggle-theme"

const chevronVariants = {
  open: { rotate: 0 },
  close: { rotate: 180 },
}

const UserPanel = () => {
  const [isHover, hoverProps] = useHover()

  return (
    <div className={styles.panel} {...hoverProps}>
      <div className={"hover:text-red-400 transition-colors"}>
        <Avatar />

        <motion.div
          animate={isHover ? "open" : "close"}
          variants={chevronVariants}
        >
          <BiChevronDown size={24} />
        </motion.div>
      </div>

      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.dropdown}
          >
            <motion.div
              className={styles.dropdownItem}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              a
            </motion.div>
            <motion.div
              className={styles.dropdownItem}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              b
            </motion.div>
            <motion.div
              className={styles.dropdownItem}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              c
            </motion.div>
            <motion.div
              className={styles.dropdownItem}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              d
            </motion.div>
            <motion.div
              className={styles.dropdownItem}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              <ToggleTheme />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default UserPanel
