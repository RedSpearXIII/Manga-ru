import { AnimatePresence, motion } from "framer-motion"
import React, { Dispatch, SetStateAction } from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"
import { ImSpinner9 } from "react-icons/all"
import { Modal } from "~shared/components"

type Props = {
  options: { value: string; label: string }[]
  onSelectItem: (value: string) => void
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  currentSelectedItem: string
  isLoading?: boolean
  label?: string
  withModal: boolean
}

export const SelectDropdown = ({
  options,
  onSelectItem,
  isOpen,
  currentSelectedItem,
  isLoading,
  setIsOpen,
  label,
  withModal,
}: Props) => {
  const selectItem = (value: string) => {
    onSelectItem(value)
  }

  const listItems = (
    <>
      {options.length > 0 && !isLoading ? (
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
      ) : isLoading ? (
        <li className={styles.spinnerLoader}>
          <ImSpinner9 />
        </li>
      ) : (
        <li className={"text-center text-sm"}>Ничего не найдено :(</li>
      )}
    </>
  )

  if (withModal)
    return (
      <Modal
        centered={options.length < 15}
        title={label}
        isOpened={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
      >
        <ul>{listItems}</ul>
      </Modal>
    )

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.ul
          className={styles.dropdown}
          initial={{ opacity: 0, top: "120%", scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          {listItems}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}
