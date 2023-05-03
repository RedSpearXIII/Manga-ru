import React from "react"
import styles from "./styles.module.pcss"
import { IoMdApps, MdClose } from "react-icons/all"
import { useLightboxThumbsStore } from "../../model"

type Props = {
  title?: string
  onCloseLightbox: () => void
}

export const Header = ({ title, onCloseLightbox }: Props) => {
  const { setIsShowed: setThumbsShowed, isShowed: thumbsIsShowed } =
    useLightboxThumbsStore()

  const toggleThumbsShowed = () => {
    setThumbsShowed(!thumbsIsShowed)
  }

  return (
    <div className={styles.header}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.panel}>
        <div onClick={toggleThumbsShowed} className={styles.panelBtn}>
          <IoMdApps />
        </div>
        <div onClick={onCloseLightbox} className={styles.panelBtn}>
          <MdClose />
        </div>
      </div>
    </div>
  )
}
