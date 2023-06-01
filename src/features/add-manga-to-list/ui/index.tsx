import React from "react"
import { useHover } from "~shared/hooks"
import styles from "./styles.module.pcss"
import { BiChevronDown } from "react-icons/all"
import { motion, Variants } from "framer-motion"
import { Button } from "~shared/components"

const chevronVariants: Variants = {
  open: { rotate: 0 },
  closed: { rotate: 180 },
}
const dropdownVariants: Variants = {
  open: {
    height: "auto",
  },
  closed: {
    height: 0,
  },
}

export const AddMangaToList = () => {
  const [isHovered, hoverProps] = useHover(300)

  return (
    <div className={styles.container} {...hoverProps}>
      <div className={"flex"}>
        <Button
          rightIcon={
            <motion.div
              variants={chevronVariants}
              animate={isHovered ? "open" : "closed"}
            >
              <BiChevronDown />
            </motion.div>
          }
          className={"flex-1"}
        >
          Добавить в список
        </Button>
      </div>

      <motion.ul
        variants={dropdownVariants}
        animate={isHovered ? "open" : "closed"}
        className={styles.dropdown}
      >
        <li className={styles.dropdownItem}>Прочитано</li>
        <li className={styles.dropdownItem}>Читаю</li>
        <li className={styles.dropdownItem}>Планирую читать</li>
        <li className={styles.dropdownItem}>Заброшенно</li>
      </motion.ul>
    </div>
  )
}
