import React, { ReactNode } from "react"
import styles from "./styles.module.pcss"
import { BiErrorAlt } from "react-icons/all"
import { Link, useLocation } from "react-router-dom"

type Props = {
  children: ReactNode
}

const Form = ({ children }: Props) => <>{children}</>

const AuthError = ({ children }: Props) => (
  <>
    <div className={styles.authErrorMsg}>
      <div className={styles.icon}>
        <BiErrorAlt />
      </div>
      <p>{children}</p>
    </div>
  </>
)

const AuthBarByServices = ({ children }: Props) => <>{children}</>

const AuthForm = ({ children }: Props) => {
  const { pathname } = useLocation()

  return (
    <div className={styles.form}>
      {children}
      <hr className={"h-px dark:bg-slate-800 bg-slate-300 border-0"} />
      {pathname === "/signup" && (
        <p className={"text-center"}>
          Уже есть аккаунт?{" "}
          <Link className={"underline"} to={"/login"}>
            Войти
          </Link>
        </p>
      )}
      {pathname === "/login" && (
        <p className={"text-center"}>
          Еще нет аккаунта?{" "}
          <Link className={"underline"} to={"/signup"}>
            Зарегистрироваться
          </Link>
        </p>
      )}
    </div>
  )
}

AuthForm.Form = Form
AuthForm.AuthError = AuthError
AuthForm.AuthBarByServices = AuthBarByServices
export default AuthForm
