import React from "react"
import styles from "./styles.module.pcss"
import { Button } from "~shared/components"
import { motion, Variants } from "framer-motion"
import { BiChevronDown } from "react-icons/all"
import { useHover } from "~shared/hooks"
import { AnimeFavoriteListStatuses } from "~shared/api"

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

const options: { title: string; value: AnimeFavoriteListStatuses }[] = [
  { title: "Смотрю", value: "Watching" },
  { title: "Запланировано", value: "InPlan" },
  { title: "Просмотрено", value: "Watched" },
  { title: "Отложено", value: "Postponed" },
]

type Props = {
  onAddAnimeToFavoriteList: (status: AnimeFavoriteListStatuses) => void
}

export const FavoriteListButton = ({ onAddAnimeToFavoriteList }: Props) => {
  const [isHovered, hoverProps] = useHover(100)

  return (
    <div className={styles.favoriteListButton} {...hoverProps}>
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
        {options.map((option) => (
          <li
            onClick={() => onAddAnimeToFavoriteList(option.value)}
            className={styles.dropdownItem}
          >
            {option.title}
          </li>
        ))}
      </motion.ul>
    </div>
  )
}
