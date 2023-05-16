export type AuthByLocalErrors =
  | "Email already exists"
  | "Username already exists"

export const authByLocalErrorMapper = (error: AuthByLocalErrors) =>
  error === "Email already exists"
    ? "Аккаунт с таким email уже существует."
    : "Пользователь с таким именем уже существует."
