import { create } from "zustand"

type State = {
  isShowed: boolean
}

type Actions = {
  setIsShowed: (val: boolean) => void
}

type Store = Actions & State

const initialState: State = {
  isShowed: false,
}

export const useLightboxThumbsStore = create<Store>((setState) => ({
  ...initialState,
  setIsShowed: (val) => setState({ isShowed: val }),
}))
