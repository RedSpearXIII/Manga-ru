import React, { useEffect } from "react"
import styles from "./styles.module.pcss"
import {
  AiFillHome,
  FaBookOpen,
  FaPlay,
  FaUserPlus,
  IoNotificationsSharp,
  RiLoginBoxFill,
} from "react-icons/all"
import { mobileNavMenuModel } from "../../model"
import { Link } from "react-router-dom"
import CatalogSearch from "~features/catalog-search/ui"
import { ToggleTheme } from "~features/toggle-theme"
import clsx from "clsx"
import { motion, stagger, useAnimate } from "framer-motion"
import { useStore } from "effector-react"
import { viewerModel } from "~entities/viewer"

const staggerItems = stagger(0.05, {
  startDelay: 0.15,
})

export const NavItems = () => {
  const { isOpened } = useStore(mobileNavMenuModel.$mobileNavMenu)
  const isAuth = useStore(viewerModel.$isAuth)

  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(
      "li",
      isOpened
        ? {
            opacity: 1,
            scale: 1,
          }
        : {
            opacity: 0,
            scale: 0,
          },
      {
        delay: isOpened ? staggerItems : 0,
        duration: 0.15,
      }
    )
  }, [isOpened])

  return (
    <motion.div
      ref={scope}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.15 }}
      className={styles.nav}
    >
      {!isAuth && (
        <>
          <li>
            <Link className={styles.navItem} to={"/login"}>
              <RiLoginBoxFill />
              <p>Войти</p>
            </Link>
          </li>

          <li>
            <Link className={styles.navItem} to={"/signup"}>
              <FaUserPlus className={"translate-x-0.5"} />
              <p>Регистр.</p>
            </Link>
          </li>
        </>
      )}
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
  )
}
