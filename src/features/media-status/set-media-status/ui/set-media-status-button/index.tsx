import React from "react"
import styles from "./styles.module.pcss"
import { Button } from "~shared/components"
import { motion, Variants } from "framer-motion"
import { BiChevronDown } from "react-icons/all"
import { useHover } from "~shared/hooks"
import {
  AnimeTrackStatuses,
  FAVORITE_LIST_DISTRIBUTION_QUERY_KEY,
  useSetAnimeStatus,
} from "~shared/api"
import { useQueryClient } from "@tanstack/react-query"

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

const options: { title: string; value: AnimeTrackStatuses }[] = [
  { title: "Смотрю", value: "Watching" },
  { title: "Запланировано", value: "InPlan" },
  { title: "Просмотрено", value: "Watched" },
  { title: "Отложено", value: "Postponed" },
]

type Props = {
  animeUrl?: string | undefined
  mangaUrl?: string | undefined
  onSuccess?: () => void
} & ({ animeUrl: string } | { mangaUrl: string })

export const SetMediaStatusButton = ({
  animeUrl,
  mangaUrl,
  onSuccess,
}: Props) => {
  const [isHovered, hoverProps] = useHover(100)

  const queryClient = useQueryClient()
  const { mutate } = useSetAnimeStatus()

  const setMediaStatus = (status: AnimeTrackStatuses) => {
    if (animeUrl) {
      mutate(
        { status, animeUrl: animeUrl! },
        {
          onSuccess: () => {
            onSuccess && onSuccess()
            queryClient.invalidateQueries({
              queryKey: [FAVORITE_LIST_DISTRIBUTION_QUERY_KEY(animeUrl!)],
            })
          },
        }
      )
    }
    if (mangaUrl) {
    }
  }

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
            key={option.value}
            onClick={() => setMediaStatus(option.value)}
            className={styles.dropdownItem}
          >
            {option.title}
          </li>
        ))}
      </motion.ul>
    </div>
  )
}
