import React from "react"
import styles from "./styles.module.pcss"
import { Outlet } from "react-router-dom"
import { Header } from "~widgets/header"
import { Sidebar } from "~widgets/sidebar"
import { Footer } from "~widgets/footer"

export const MainLayout = () => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <div className={styles.content}>
        <Header />
        <div className={styles.pageContent}>
          <main>
            <Outlet />
          </main>
        </div>
        <Footer />
      </div>
    </div>
  )
}
