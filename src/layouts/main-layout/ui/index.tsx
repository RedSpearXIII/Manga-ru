import React from "react"
import styles from "./styles.module.pcss"
import { Outlet } from "react-router-dom"
import { Header } from "~widgets/header"
import { Footer } from "~widgets/footer"
import { MobileNavButton } from "~widgets/mobile-nav-button"
import { useScreenSize } from "~shared/hooks"
import { Breakpoints } from "~shared/types"
import clsx from "clsx"

export const MainLayout = () => {
  const screenSize = useScreenSize()

  return (
    <div className={styles.layout}>
      {screenSize <= Breakpoints.md ? <MobileNavButton /> : <Header />}

      <div
        className={clsx(
          styles.pageContent,
          screenSize > Breakpoints.md && "pt-28"
        )}
      >
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}
