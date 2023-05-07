import React from "react"
import styles from "./styles.module.pcss"
import {
  AiFillHome,
  FaBookOpen,
  FaPlay,
  IoNotificationsSharp,
} from "react-icons/all"
import { useMobileNavMenuStore } from "../../model"
import { Link } from "react-router-dom"
import CatalogSearch from "~features/catalog-search/ui"
import { ToggleTheme } from "~features/toggle-theme"
import clsx from "clsx"
import { AnimatePresence, motion } from "framer-motion"

export const NavItems = () => {
  const isOpened = useMobileNavMenuStore((state) => state.isOpened)

  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className={styles.nav}
        >
          <li className={clsx(styles.navItem, styles.toggleThemeBtn)}>
            <ToggleTheme />
            <p>Тема</p>
          </li>
          <li className={styles.navItem}>
            <IoNotificationsSharp className={styles.icon} />
            <p>Новости</p>
          </li>
          <li className={styles.navItem}>
            <CatalogSearch />
            <p>Поиск</p>
          </li>
          <li>
            <Link to={"/manga"} className={styles.navItem}>
              <FaBookOpen />
              <p>Манга</p>
            </Link>
          </li>
          <li>
            <Link to={"/anime"} className={styles.navItem}>
              <FaPlay />
              <p>Аниме</p>
            </Link>
          </li>
          <li>
            <Link to={"/"} className={styles.navItem}>
              <AiFillHome />
              <p>Главная</p>
            </Link>
          </li>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
