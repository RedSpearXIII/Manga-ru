import React from "react"
import styles from "./styles.module.pcss"
import { AnimatePresence, motion } from "framer-motion"
import { useHover } from "~shared/hooks"
import { BiChevronDown } from "react-icons/all"
import { ToggleTheme } from "~features/toggle-theme"
import { Avatar } from "~shared/components"
import { ProfileSection } from "./profile-section"

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

      <AnimatePresence>
        {isHover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.dropdown}
          >
            <div className={styles.dropdownItem}>
              <ProfileSection />
            </div>
            <div className={styles.dropdownItem}></div>
            <div className={styles.dropdownItem}></div>
            <div className={styles.dropdownItem}></div>
            <div className={styles.dropdownItem}>
              <ToggleTheme />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
