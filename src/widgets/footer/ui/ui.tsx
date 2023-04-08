import React from "react"
import styles from "./styles.module.pcss"
import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.links}>
        <div className={styles.linkItem}>
          <Link to={"/right-holders"}>
            <p>Для правообладателей</p>
          </Link>
        </div>
      </div>
      <div className={styles.site}>
        <p>© anifox.club 2023 - current time</p>
      </div>
    </div>
  )
}
