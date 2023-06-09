import { LoginFields } from "../ui"
import { publicHttp } from "~shared/api"
import { createEvent, createStore, sample } from "effector"
import { createEffect } from "effector/effector.umd"
import { AxiosErrorResponse } from "~shared/types"
import { loginErrorMapper, LoginErrors } from "../lib"
import { viewerModel } from "~entities/viewer"

type Store = {
  loginError: null | string
}

const initialState: Store = {
  loginError: null,
}

export const loginUserFx = createEffect<
  LoginFields,
  void,
  AxiosErrorResponse<LoginErrors>
>(async (fields: LoginFields) => {
  const response = await publicHttp.post("/auth/login", fields)
  localStorage.setItem("accessToken", response.data.accessToken)
  localStorage.setItem("refreshToken", response.data.refreshToken)
})

const setLoginError = createEvent<string>()

export const $login = createStore<Store>(initialState)
  .on(loginUserFx.doneData, (state) => ({
    ...state,
    loginError: null,
  }))
  .on(setLoginError, (state, payload) => ({
    loginError: payload,
  }))

sample({
  clock: loginUserFx.doneData,
  target: viewerModel.getUserFx,
})

sample({
  clock: loginUserFx.failData,
  fn: ({ response }) => loginErrorMapper(response!.data.error),
  target: setLoginError,
})
