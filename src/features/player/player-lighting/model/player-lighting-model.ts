import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type State = {
  luminosityColor: null | string
}

type Actions = {
  setLuminosityColor: (hex: string) => void
  resetState: () => void
}

type Store = State & Actions

const initialStore: State = {
  luminosityColor: null,
}

export const usePlayerLightingModel = create(
  immer<Store>((setState) => ({
    ...initialStore,
    setLuminosityColor: (hex) =>
      setState((store) => {
        store.luminosityColor = hex
      }),
    resetState: () =>
      setState((store) => {
        store.luminosityColor = null
      }),
  }))
)
