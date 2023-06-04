import { AuthByLocalFields } from "../ui"
import { publicHttp } from "~shared/api"
import { createEffect, createEvent, createStore, sample } from "effector"
import { authByLocalErrorMapper, AuthByLocalErrors } from "../lib"
import { AxiosErrorResponse } from "~shared/types"

type State = {
  authError: null | string
  isSuccess: boolean | null
}

const initialState: State = {
  authError: null,
  isSuccess: null,
}

type AuthByLocalParams = Omit<AuthByLocalFields, "repeatPassword">

const setAuthError = createEvent<string>()

export const registerUserFx = createEffect<
  AuthByLocalParams,
  void,
  AxiosErrorResponse<AuthByLocalErrors>
>(async (fields: AuthByLocalParams) => {
  const response = await publicHttp.post("/auth/register", fields)
  console.log(response)
})

export const $authByLocal = createStore<State>(initialState)
  .on(registerUserFx.doneData, () => ({
    isSuccess: true,
    authError: null,
  }))
  .on(setAuthError, (state, error) => ({
    ...state,
    authError: error,
  }))

sample({
  clock: registerUserFx.failData,
  fn: ({ response }) => authByLocalErrorMapper(response!.data.error),
  target: setAuthError,
})
