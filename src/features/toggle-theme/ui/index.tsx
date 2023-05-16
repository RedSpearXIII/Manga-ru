import React from "react"
import { $theme, toggleTheme } from "../model"
import { BsMoonStarsFill, BsSunFill } from "react-icons/all"
import styles from "./styles.module.pcss"
import { useStore } from "effector-react"

export const ToggleTheme = () => {
  const { themeName } = useStore($theme)
  return (
    <div
      onClick={() => {
        toggleTheme()
      }}
      className={styles.toggleTheme}
    >
      <div className={styles.icon}>
        {themeName === "light" ? <BsSunFill /> : <BsMoonStarsFill />}
      </div>

      <p className={styles.text}>
        {themeName === "light" ? "Светлая" : "Темная"}
      </p>
    </div>
  )
}
