import React from "react"
import { useToggleTheme } from "../model"
import { BsSun } from "react-icons/all"

export const ToggleTheme = () => {
  const { toggleTheme } = useToggleTheme()

  useToggleTheme.subscribe((state) => {
    if (state.themeName === "dark") {
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  })

  return <BsSun onClick={toggleTheme} />
}
