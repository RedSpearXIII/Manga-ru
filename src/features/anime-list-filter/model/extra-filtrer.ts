import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type State = {
  isOpened: boolean
}
type Actions = {
  setIsOpened: (value: boolean) => void
}
type Store = State & Actions

const initialState: State = {
  isOpened: false,
}

export const useExtraFilterStore = create(
  immer<Store>((setState) => ({
    ...initialState,
    setIsOpened: (value) =>
      setState((state) => {
        state.isOpened = value
      }),
  }))
)
