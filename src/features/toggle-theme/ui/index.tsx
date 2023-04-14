import React from "react"
import { useToggleTheme } from "../model"
import { BsMoonStarsFill, BsSunFill } from "react-icons/all"
import styles from "./styles.module.pcss"

export const ToggleTheme = () => {
  const { toggleTheme, themeName } = useToggleTheme()

  useToggleTheme.subscribe((state) => {
    if (state.themeName === "dark") {
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  })

  return (
    <div onClick={toggleTheme} className={styles.toggleTheme}>
      <div className={styles.icon}>
        {themeName === "light" ? <BsSunFill /> : <BsMoonStarsFill />}
      </div>

      <p className={styles.text}>
        {themeName === "light" ? "Светлая" : "Темная"}
      </p>
    </div>
  )
}
