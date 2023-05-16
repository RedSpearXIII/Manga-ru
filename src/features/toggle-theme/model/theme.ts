import { createEvent, createStore } from "effector"
import { persist } from "effector-storage/local"

type ThemeVariants = "light" | "dark"
type State = {
  themeName: ThemeVariants
}

const prefersColorScheme = (): ThemeVariants =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

const currentTheme: ThemeVariants =
  "theme" in localStorage
    ? localStorage.getItem("theme") === "light"
      ? "light"
      : localStorage.getItem("theme") === "dark"
      ? "dark"
      : prefersColorScheme()
    : prefersColorScheme()

export const $theme = createStore<State>({ themeName: currentTheme })

export const toggleTheme = createEvent()
$theme.on(toggleTheme, (state) => {
  return { themeName: state.themeName === "dark" ? "light" : "dark" }
})

$theme.watch((state) => {
  state.themeName === "dark"
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark")
})

persist({ store: $theme, key: "theme" })
