import { createEvent, createStore } from "effector"

type State = {
  distributionPanelIsOpened: boolean
}

const initialState: State = {
  distributionPanelIsOpened: false,
}

export const setDistributionPanelIsOpened = createEvent<boolean>()

export const $distributionRating = createStore<State>(initialState).on(
  setDistributionPanelIsOpened,
  (state, payload) => ({ ...state, distributionPanelIsOpened: payload })
)
