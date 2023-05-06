import React from "react"
import styles from "./styles.module.pcss"
import {
  AiFillHome,
  BsChatLeftQuoteFill,
  BsMoonStarsFill,
  FaBookOpen,
  FaPlay,
  FaSearch,
  FaUserAlt,
  IoNotificationsSharp,
  MdOutlineClose,
} from "react-icons/all"
import { useMobileNavButtonStore } from "~widgets/mobile-nav-button/model"

export const NavItems = () => {
  const setIsOpen = useMobileNavButtonStore((state) => state.setIsOpen)

  const closeNavButton = () => {
    setIsOpen(false)
  }

  return (
    <>
      <li className={styles.navItem}>
        <IoNotificationsSharp className={styles.icon} />
        <p>Новости</p>
      </li>
      <li className={styles.navItem}>
        <FaSearch />
        <p>Поиск</p>
      </li>
      <li className={styles.navItem}>
        <AiFillHome />
        <p>Главная</p>
      </li>
      <li className={styles.navItem}>
        <FaPlay />
        <p>Аниме</p>
      </li>
      <li className={styles.navItem}>
        <FaBookOpen />
        <p>Манга</p>
      </li>
      <li className={styles.navItem}>
        <FaUserAlt />
        <p>Профиль</p>
      </li>
      <li className={styles.navItem}>
        <BsChatLeftQuoteFill />
        <p>Форум</p>
      </li>
      <li className={styles.navItem}>
        <BsMoonStarsFill />
        <p>Тема</p>
      </li>
      <li onClick={closeNavButton} className={styles.navItem}>
        <MdOutlineClose className={"text-2xl"} />
      </li>
    </>
  )
}
