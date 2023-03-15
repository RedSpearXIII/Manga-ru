import React from "react"
import { useToggleTheme } from "../model"
import { BsSun } from "react-icons/all"

export const ToggleTheme = () => {
  const { toggleTheme } = useToggleTheme()

  useToggleTheme.subscribe((state) => {
    if (state.themeName === "dark")
      document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  })

  return <BsSun onClick={toggleTheme} />
}
