import React from "react"
import styles from "./styles.module.pcss"
import SiteLogo from "~components/site-logo"
import CatalogSearch from "~features/catalog-search/ui/ui"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaBookOpen, FaPlay } from "react-icons/all"

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
      <motion.nav initial={{ scale: 0.8 }} animate={{ scale: 1 }}>
        {navLinks}
        <CatalogSearch />
      </motion.nav>
      <p>Foot</p>
    </div>
  )
}
