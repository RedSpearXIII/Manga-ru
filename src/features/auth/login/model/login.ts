import { LoginFields } from "../ui"
import { publicHttp } from "~shared/api"
import { createEvent, createStore, sample } from "effector"
import { createEffect } from "effector/effector.umd"
import { AxiosErrorResponse } from "~shared/types"
import { loginErrorMapper, LoginErrors } from "../lib"

type Store = {
  loginError: null | string
  isSuccess: boolean | null
}

const initialState: Store = {
  loginError: null,
  isSuccess: null,
}

export const loginUserFx = createEffect<
  LoginFields,
  void,
  AxiosErrorResponse<LoginErrors>
>(async (fields: LoginFields) => {
  const response = await publicHttp.post("/auth/register", fields)
  response.headers["set-cookie"]?.forEach((cookie) => {
    document.cookie = cookie
  })
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

// export const useLoginStore = create<Store>((setState) => ({
//   ...initialState,
//   resetState: () => setState(initialState),
//   login: async (fields) => {
//     try {
//       setState({ loginError: null })
//       const response = await publicHttp.post("/auth/login", fields)
//       response.headers["set-cookie"]?.forEach((cookie) => {
//         document.cookie = cookie
//       })
//       setState({ isSuccess: true })
//     } catch (e) {
//       if (e instanceof Error) {
//         // @ts-ignore
//         const error = e.response.data.error
//         setState({ loginError: error })
//       }
//     }
//   },
// }))
