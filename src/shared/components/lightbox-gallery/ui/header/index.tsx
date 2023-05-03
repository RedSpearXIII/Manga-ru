import React from "react"
import styles from "./styles.module.pcss"
import { MdClose } from "react-icons/all"

type Props = {
  title?: string
  onClose: () => void
}

export const Header = ({ title, onClose }: Props) => {
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>{title}</h3>

      <div onClick={onClose} className={styles.closeBtn}>
        <MdClose />
      </div>
    </div>
  )
}
