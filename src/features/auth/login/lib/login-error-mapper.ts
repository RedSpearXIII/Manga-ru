export type LoginErrors = "Invalid email/password supplied" | string
export const loginErrorMapper = (error: LoginErrors) =>
  error === "Invalid email/password supplied"
    ? "Неверный логин или пароль."
    : "Аккаунт с таким email не существует."
