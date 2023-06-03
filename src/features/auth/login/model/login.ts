import { LoginFields } from "../ui"
import { authHttp, publicHttp } from "~shared/api"
import { createEvent, createStore, sample } from "effector"
import { createEffect } from "effector/effector.umd"
import { AxiosErrorResponse } from "~shared/types"
import { loginErrorMapper, LoginErrors } from "../lib"
import { viewerModel } from "~entities/viewer"
import { Viewer } from "~entities/viewer/model/viewer"

type Store = {
  loginError: null | string
  isSuccess: boolean | null
}

const initialState: Store = {
  loginError: null,
  isSuccess: null,
}

export const getUserFx = createEffect<void, Viewer, any>(async () => {
  const response = await authHttp.post("/users/whoami")
  console.log(response)
  return response.data
})

export const loginUserFx = createEffect<
  LoginFields,
  void,
  AxiosErrorResponse<LoginErrors>
>(async (fields: LoginFields) => {
  const response = await publicHttp.post("/auth/login", fields)
  localStorage.setItem("accessToken", response.headers.Accesstoken)
  localStorage.setItem("refreshToken", response.headers.Refreshtoken)
})

const setLoginError = createEvent<string>()

export const $login = createStore<Store>(initialState)
  .on(loginUserFx.doneData, (state) => ({
    ...state,
    isSuccess: true,
    loginError: null,
  }))
  .on(setLoginError, (state, payload) => ({
    isSuccess: null,
    loginError: payload,
  }))

sample({
  clock: loginUserFx.failData,
  fn: ({ response }) => loginErrorMapper(response!.data.error),
  target: setLoginError,
})

sample({
  clock: getUserFx.doneData,
  target: viewerModel.setViewer,
})

sample({
  clock: getUserFx.failData,
  target: viewerModel.logout,
})
