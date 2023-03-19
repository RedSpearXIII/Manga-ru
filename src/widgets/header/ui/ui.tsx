import React from "react"
import styles from "./styles.module.pcss"
import { Link } from "react-router-dom"
import UserPanel from "~widgets/user-panel/ui/ui"

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
        <UserPanel />
      </div>
    </header>
  )
}
