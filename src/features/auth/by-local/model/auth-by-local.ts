import { AuthByLocalFields } from "../ui"
import { publicHttp } from "~shared/api"
import { createEffect, createEvent, createStore, sample } from "effector"
import { authByLocalErrorMapper, AuthByLocalErrors } from "../lib"
import { AxiosErrorResponse } from "~shared/types"
import { viewerModel } from "~entities/viewer"
import { AxiosResponse } from "axios"

type State = {
  authError: null | string
}

const initialState: State = {
  authError: null,
}

type AuthByLocalParams = Omit<AuthByLocalFields, "repeatPassword">

const setAuthError = createEvent<string>()

export const registerUserFx = createEffect<
  AuthByLocalParams,
  AxiosResponse<{ accessToken: string; refreshToken: string }>,
  AxiosErrorResponse<AuthByLocalErrors>
>(async (fields: AuthByLocalParams) => {
  return await publicHttp.post("/auth/register", fields)
})

export const $authByLocal = createStore<State>(initialState)
  .on(registerUserFx.doneData, () => ({
    authError: null,
  }))
  .on(setAuthError, (state, error) => ({
    ...state,
    authError: error,
  }))

sample({
  clock: registerUserFx.doneData,
  fn: (response) => {
    localStorage.setItem("accessToken", response.data.accessToken)
    localStorage.setItem("refreshToken", response.data.refreshToken)
  },
  target: viewerModel.getUserFx,
})

sample({
  clock: registerUserFx.failData,
  fn: ({ response }) => authByLocalErrorMapper(response!.data.error),
  target: setAuthError,
})
