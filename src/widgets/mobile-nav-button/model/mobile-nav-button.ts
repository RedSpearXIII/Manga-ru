import { create } from "zustand"

type State = {
  isOpened: boolean
}

type Actions = {
  setIsOpen: (value: boolean) => void
}

type Store = State & Actions

const initialState: State = {
  isOpened: false,
}

export const useMobileNavButtonStore = create<Store>((setState) => ({
  ...initialState,
  setIsOpen: (value) => setState({ isOpened: value }),
}))
