import { create } from "zustand"

type ThemeVariants = "light" | "dark"

type State = {
  themeName: ThemeVariants
}

type Actions = {
  toggleTheme: () => any
}

type StateType = (State & Actions) | Partial<State & Actions>

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

export const useToggleTheme = create<StateType>((set) => ({
  themeName: currentTheme,
  toggleTheme: () =>
    set((state) => ({
      ...state,
      themeName: state.themeName === "light" ? "dark" : "light",
    })),
}))
