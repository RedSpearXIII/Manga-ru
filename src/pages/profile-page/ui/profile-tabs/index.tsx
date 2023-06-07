import React, { useEffect, useState } from "react"
import { Tabs } from "~shared/components"
import { Link, useLocation } from "react-router-dom"
import styles from "./styles.module.pcss"

export const ProfileTabs = () => {
  const tabsItems = [
    { value: "Обзор", to: "/profile/yockymai" },
    { value: "Аниме", to: "/profile/animelist" },
    { value: "Манга", to: "/profile/mangalist" },
    { value: "Избранное", to: "/profile/animefavorites" },
    { value: "Рецензии", to: "/profile/reviews" },
  ]

  const { pathname } = useLocation()

  const [tabs, setTabs] = useState(
    tabsItems.map((tab) => ({
      value: tab.value,
      to: tab.to,
      active: tab.to === pathname,
    }))
  )

  useEffect(() => {
    setTabs((prev) =>
      prev.map((tab) => ({
        value: tab.value,
        to: tab.to,
        active: tab.to === pathname,
      }))
    )
  }, [pathname])

  return (
    <div className={styles.profileTabs}>
      <div className={"mx-auto w-fit"}>
        <Tabs>
          {tabs.map((tab) => (
            <Link key={tab.to} to={tab.to}>
              <Tabs.TabItem value={tab.value} active={tab.active} />
            </Link>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
