import { createEvent, createStore } from "effector"
import { persist } from "effector-storage/local"

export type Viewer = {
  username: string
  email: string
  nickName: string
  typeUser: string
  roles: [
    {
      id: string
      name: string
    }
  ]
  image: string
}

export type State = {
  viewer: Viewer
  isAuth: boolean
}

export const setViewer = createEvent<Viewer>()
export const logout = createEvent()
export const $viewer = createStore<State>({ isAuth: false } as State)
  .on(setViewer, (state, payload) => ({
    ...state,
    isAuth: true,
    viewer: payload,
  }))
  .on(logout, (state) => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    return { ...state, isAuth: false, viewer: {} as Viewer }
  })

export const $isAuth = $viewer.map((state) => state.isAuth)

persist({ store: $viewer, key: "viewer" })
