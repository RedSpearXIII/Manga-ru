import React from "react"
import { Link } from "react-router-dom"
import styles from "./styles.module.pcss"

const SiteLogo = () => {
  return (
    <Link to={"/"}>
      <div className={styles.siteLogo}>
        <p className={styles.ani}>Ani</p>
        <p className={styles.fox}>Fox</p>
      </div>
    </Link>
  )
}

export default SiteLogo
