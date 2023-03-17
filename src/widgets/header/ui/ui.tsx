import React from "react"
import styles from "./styles.module.pcss"
import { ToggleTheme } from "~features/toggle-theme"
import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <Link to={"/anime"}>link</Link>
        <Link to={"/anime"}>link</Link>
        <Link to={"/anime"}>link</Link>
        <Link to={"/anime"}>link</Link>
        <Link to={"/anime"}>link</Link>
      </nav>
      <div>
        <ToggleTheme />
      </div>
    </header>
  )
}
