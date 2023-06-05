import { createEvent, createStore, sample } from "effector"
import { persist } from "effector-storage/local"
import { createEffect } from "effector/effector.umd"
import { authHttp } from "~shared/api"

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
  image?: string
}

export type State = {
  viewer: Viewer
  isAuth: boolean
}

export const setViewer = createEvent<Viewer>()

export const getUserFx = createEffect<void, Viewer, void>(async () => {
  const response = await authHttp.get("/users/whoami")
  return response.data
})

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

sample({
  clock: getUserFx.doneData,
  target: setViewer,
})

sample({
  clock: getUserFx.failData,
  target: logout,
})

export const $isAuth = $viewer.map((state) => state.isAuth)

persist({ store: $viewer, key: "viewer" })
