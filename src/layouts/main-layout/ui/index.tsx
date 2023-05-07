import React, { lazy, Suspense } from "react"
import styles from "./styles.module.pcss"
import { Outlet } from "react-router-dom"
import { Footer } from "~widgets/footer"
import { useScreenSize } from "~shared/hooks"
import { Breakpoints } from "~shared/types"
import clsx from "clsx"

const Header = lazy(() =>
  import("~widgets/header").then(({ Header }) => ({ default: Header }))
)
const MobileNavMenu = lazy(() =>
  import("~widgets/mobile-nav-menu").then(({ MobileNavMenu }) => ({
    default: MobileNavMenu,
  }))
)

export const MainLayout = () => {
  const screenSize = useScreenSize()

  return (
    <div className={styles.layout}>
      <Suspense>
        {screenSize <= Breakpoints.md ? <MobileNavMenu /> : <Header />}
      </Suspense>

      <div
        className={clsx(
          styles.pageContent,
          screenSize > Breakpoints.md ? "pt-28" : "pt-2"
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
