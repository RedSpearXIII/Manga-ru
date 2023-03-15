import { create } from "zustand"

type State = {
  themeName: "light" | "dark"
}

type Actions = {
  toggleTheme: () => any
}

export const useToggleTheme = create<State & Actions>((set) => ({
  themeName: "light",
  toggleTheme: () =>
    set((state) => ({
      ...state,
      themeName: state.themeName === "light" ? "dark" : "light",
    })),
}))
