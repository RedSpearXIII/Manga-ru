import React from "react"
import { Outlet } from "react-router-dom"
import { Header } from "~widgets/header"
import styles from "./styles.module.pcss"
import { Sidebar } from "~widgets/sidebar"

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
