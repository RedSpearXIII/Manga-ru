import React from "react"
import { useToggleTheme } from "../model"
import { BsSun } from "react-icons/all"

export const ToggleTheme = () => {
  const { toggleTheme, themeName } = useToggleTheme()

  return <BsSun />
}
