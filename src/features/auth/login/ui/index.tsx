import React from "react"
import styles from "./styles.module.pcss"
import { Button, Input } from "~shared/components"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { AiFillLock, BiErrorAlt, MdAlternateEmail } from "react-icons/all"
import { getValidationSchema } from "../lib"
import { AuthNavigateBar } from "~entities/auth/auth-navigate-bar"
import { Link } from "react-router-dom"
import { useLoginStore } from "../model"

export type LoginFields = {
  email: string
  password: string
}

type Props = {
  onSuccess?: () => void
}

export const LoginForm = ({ onSuccess }: Props) => {
  const { login, loginError } = useLoginStore()
  const LoginSchema = getValidationSchema()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFields>({
    resolver: yupResolver(LoginSchema),
  })

  const onSubmit: SubmitHandler<LoginFields> = async (fields) => {
    try {
      console.log("ОТРАБОТАЛ")
      await login(fields)
      if (onSuccess) onSuccess()
    } catch (e) {}
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h3>Войти</h3>
        <div>
          <Input
            size={"sm"}
            type={"email"}
            icon={<MdAlternateEmail />}
            {...register("email")}
            label={"Email"}
            placeholder={"sharingan@ghoul.zxc"}
          />
          <p className={styles.fieldErrorMsg}>{errors.email?.message}</p>
        </div>
        <div>
          <Input
            size={"sm"}
            type={"password"}
            icon={<AiFillLock />}
            {...register("password")}
            label={"Пароль"}
            placeholder={"Введите пароль"}
          />
          <p className={styles.fieldErrorMsg}>{errors.password?.message}</p>
        </div>
        {loginError && (
          <div className={styles.authErrorMsg}>
            <div className={styles.icon}>
              <BiErrorAlt />
            </div>
            <p>{loginError}</p>
          </div>
        )}
        <div className={styles.submitBtn}>
          <Button isLoading={isSubmitting} type={"submit"}>
            Войти
          </Button>
        </div>
        <AuthNavigateBar />
        <hr className={"h-px dark:bg-slate-800 bg-slate-300 border-0"} />
        <p className={"text-center"}>
          Еще нет аккаунта?{" "}
          <Link className={"underline"} to={"/signup"}>
            Зарегистрироваться
          </Link>
        </p>
      </form>
    </div>
  )
}
