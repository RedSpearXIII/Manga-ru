import React from "react"
import { useHover } from "~shared/hooks"
import styles from "./styles.module.pcss"
import { BiChevronDown } from "react-icons/all"
import { motion } from "framer-motion"
import { useListAnimation } from "~shared/hooks"

const chevronVariants = {
  open: { rotate: 0 },
  close: { rotate: 180 },
}

export const AddMangaToList = () => {
  const [isHovered, hoverProps] = useHover(300)

  const scope = useListAnimation(isHovered)

  return (
    <div className={styles.container} {...hoverProps} ref={scope}>
      <div className={styles.button}>
        <motion.div
          variants={chevronVariants}
          animate={isHovered ? "open" : "close"}
        >
          <BiChevronDown size={24} />
        </motion.div>
        <p>Добавить в список</p>
      </div>

      <motion.ul className={styles.dropdown}>
        <li className={styles.dropdownItem}>Прочитано</li>
        <li className={styles.dropdownItem}>Читаю</li>
        <li className={styles.dropdownItem}>Планирую читать</li>
        <li className={styles.dropdownItem}>Заброшенно</li>
      </motion.ul>
    </div>
  )
}
