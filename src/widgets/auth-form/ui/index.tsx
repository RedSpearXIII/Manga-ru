import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import { AuthByLocalForm } from "~features/auth/by-local"
import { authByShikimoriModel } from "~features/auth/by-shikimori"
import AuthByServices from "./auth-by-services"
import { LoginForm } from "~features/auth/login"
import { useLocation, useNavigate } from "react-router-dom"
import styles from "./styles.module.pcss"

type Forms = "signup" | "login"

type Props = {
  displayedForm?: Forms
  setDisplayedForm?: Dispatch<SetStateAction<Forms>>
}

export const AuthForm = ({ displayedForm, setDisplayedForm }: Props) => {
  const [form, setForm] = useState<Forms>(displayedForm || "login")

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const isAuthPage = pathname === "/login" || pathname === "/signup"

  useEffect(() => {
    if (setDisplayedForm) setDisplayedForm(form)
    if (isAuthPage) navigate(`/${form}`)
  }, [form])

  useEffect(() => {
    if (isAuthPage) setForm(pathname === "/login" ? "login" : "signup")
  }, [pathname])

  const goToLogin = () => {
    setForm("login")
  }
  const goToSignup = () => {
    setForm("signup")
  }

  return (
    <div className={styles.rootForm}>
      {form === "signup" ? (
        <>
          <AuthByLocalForm />
          <hr className={styles.separator} />
          <div className={styles.switchForm}>
            <p>Уже есть аккаунт? </p>
            <p onClick={goToLogin} className={styles.switchFormLink}>
              Войти
            </p>
          </div>
        </>
      ) : (
        <>
          <LoginForm />
          <hr className={styles.separator} />
          <div className={styles.switchForm}>
            <p>Еще нет аккаунта? </p>
            <p onClick={goToSignup} className={styles.switchFormLink}>
              Зарегистрироваться
            </p>
          </div>
        </>
      )}

      <div className={"mt-3"}>
        <AuthByServices authByShikimori={authByShikimoriModel.loginFx} />
      </div>
    </div>
  )
}
