import React from "react"
import { themeModel } from "../model"
import { BsMoonStarsFill, BsSunFill } from "react-icons/all"
import styles from "./styles.module.pcss"
import { useStore } from "effector-react"

export const ToggleTheme = () => {
  const { themeName } = useStore(themeModel.$theme)
  return (
    <div
      onClick={() => themeModel.toggleTheme()}
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
