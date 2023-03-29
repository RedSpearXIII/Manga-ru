import React from "react"
import styles from "./styles.module.pcss"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.linkItem}>
          <Link to={"/right-holders"}>Для правообладателей</Link>
        </div>
      </div>
    </div>
  )
}
