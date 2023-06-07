import { AnimatePresence, motion } from "framer-motion"
import React from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"
import { ImSpinner9 } from "react-icons/all"
import { Modal } from "~shared/components"

type Props = {
  options: { value: string; label: string }[]
  onSelectItem: (item: { value: string; label: string }) => void
  onRemoveItem: (value: string) => void
  isOpen: boolean
  selectedItems: { value: string; label: string }[]
  isLoading?: boolean
  onModalClose: () => void
  label?: string
  withModal: boolean
}

export const MultiSelectDropdown = ({
  options,
  onSelectItem,
  isOpen,
  selectedItems,
  onRemoveItem,
  isLoading,
  withModal,
  label,
  onModalClose,
}: Props) => {
  const selectItem = (item: { value: string; label: string }) => {
    onSelectItem(item)
  }
  const removeItem = (value: string) => {
    onRemoveItem(value)
  }
  const elementIsSelected = (value: string) => {
    return selectedItems.some((item) => item.value === value)
  }

  const onClickItem = (item: { value: string; label: string }) => {
    elementIsSelected(item.value) ? removeItem(item.value) : selectItem(item)
  }

  const listItems = (
    <>
      {options.length > 0 && !isLoading ? (
        options.map((item, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation()
              onClickItem(item)
            }}
            className={clsx(
              elementIsSelected(item.value) && styles.itemSelected,
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
        onClose={onModalClose}
        isOpened={isOpen}
        title={label}
      >
        <ul>{listItems}</ul>
      </Modal>
    )

  //TODO: Разобраться почему модалка не закрывается при клике на backdrop

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
