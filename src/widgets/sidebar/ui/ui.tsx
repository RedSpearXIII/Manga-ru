import React from "react"
import styles from "./styles.module.pcss"
import CatalogSearch from "~features/catalog-search/ui/ui"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaBookOpen, FaPlay, IoLogIn } from "react-icons/all"
import { SiteLogo } from "~shared/components"

const links = [
  { icon: <FaPlay />, to: "/anime", title: "Аниме" },
  { icon: <FaBookOpen />, to: "/manga", title: "Манга" },
]

export const Sidebar = () => {
  const navLinks = links.map(({ to, title, icon: Icon }) => (
    <Link className={styles.sidebarNavLink} key={to} to={to}>
      {Icon}
      <p>{title}</p>
    </Link>
  ))

  return (
    <div className={styles.sidebar}>
      <SiteLogo />
      <motion.div
        className={styles.sideBarCenter}
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
      >
        {navLinks}
        <CatalogSearch />
      </motion.div>
      <div>
        <Link className={styles.sidebarNavLink} to={"/login"}>
          <IoLogIn />
          <p>Войти</p>
        </Link>
      </div>
    </div>
  )
}
