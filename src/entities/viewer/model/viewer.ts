import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type Actions = {}

type State = {}

type Store = Actions & State

const initialState: State = {}

export const useViewer = create(
  immer<Store>((setState) => ({
    ...initialState,
    setViewer: () => setState((state) => {}),
  }))
)
