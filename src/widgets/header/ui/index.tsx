import React from "react"
import styles from "./styles.module.pcss"
import { UserPanel } from "~widgets/user-panel"
import { NoticePanel } from "~widgets/notice-panel"
import useSticky from "~widgets/header/hooks/useSticky"
import clsx from "clsx"
import { SiteLogo } from "~shared/components"
import { FaBookOpen, FaPlay } from "react-icons/all"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import CatalogSearch from "~features/catalog-search/ui"

const links = [
  { icon: <FaPlay />, to: "/anime", title: "Аниме" },
  { icon: <FaBookOpen />, to: "/manga", title: "Манга" },
]

export const Header = () => {
  const isSticky = useSticky()

  const navLinks = links.map(({ to, title, icon: Icon }) => (
    <Link className={styles.link} key={to} to={to}>
      {Icon}
      <p>{title}</p>
    </Link>
  ))

  return (
    <div className={clsx(styles.wrapper, !isSticky && styles.hidden)}>
      <header className={styles.header}>
        <SiteLogo />

        <motion.nav
          className={styles.navLinks}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
        >
          {navLinks}
        </motion.nav>

        <div className={styles.rightBlock}>
          <div className={styles.rightItem}>
            <CatalogSearch />
          </div>
          <div className={styles.rightItem}>
            <NoticePanel />
          </div>
          <div className={styles.rightItem}>
            <UserPanel />
          </div>
        </div>
      </header>
    </div>
  )
}
