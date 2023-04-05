import { AnimatePresence, motion } from "framer-motion"
import React, { FC } from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"

interface SelectDropdownProps {
  options: { value: string; label: string }[]
  onSelectItem: (value: string) => void
  isOpen: boolean
  currentSelectedItem: string
}

export const SelectDropdown: FC<SelectDropdownProps> = ({
  options,
  onSelectItem,
  isOpen,
  currentSelectedItem,
}) => {
  const selectItem = (value: string) => {
    onSelectItem(value)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className={styles.dropdown}
          initial={{ opacity: 0, top: "120%", scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          {options.length > 0 ? (
            options.map((item, index) => (
              <li
                onClick={(e) => {
                  e.stopPropagation()
                  selectItem(item.value)
                }}
                className={clsx(
                  currentSelectedItem === item.value && styles.itemSelected,
                  styles.item
                )}
                key={`${item.value}-${index}`}
              >
                {item.label}
              </li>
            ))
          ) : (
            <li className={"text-center text-sm"}>Ничего не найдено :(</li>
          )}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}