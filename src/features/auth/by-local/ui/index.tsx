import React from "react"
import styles from "./styles.module.pcss"
import { Button, Input } from "~shared/components"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {
  AiFillLock,
  BiErrorAlt,
  GiFox,
  MdAlternateEmail,
} from "react-icons/all"
import { getValidationSchema } from "../lib"
import { AuthNavigateBar } from "~entities/auth/auth-navigate-bar"
import { Link } from "react-router-dom"
import { useStore } from "effector-react"
import { authByLocalModel } from "../model"

export type AuthByLocalFields = {
  email: string
  username: string
  password: string
  repeatPassword: string
}

type Props = {
  onSuccess?: () => void
}

export const AuthByLocal = ({ onSuccess }: Props) => {
  const { authError } = useStore(authByLocalModel.$authByLocal)
  const AuthByLocalSchema = getValidationSchema()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AuthByLocalFields>({
    resolver: yupResolver(AuthByLocalSchema),
  })

  const onSubmit: SubmitHandler<AuthByLocalFields> = async (fields) => {
    try {
      await authByLocalModel.registerUserFx(fields)
      if (onSuccess) onSuccess()
    } catch (e) {}
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h3>Регистрация</h3>
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
            icon={<GiFox />}
            {...register("username")}
            label={"Имя пользователя"}
            placeholder={"Канеки Кен"}
          />
          <p className={styles.fieldErrorMsg}>{errors.username?.message}</p>
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
        <div>
          <Input
            size={"sm"}
            type={"password"}
            icon={<AiFillLock />}
            {...register("repeatPassword")}
            label={"Повтор пароля"}
            placeholder={"Повторите пароль"}
          />
          <p className={styles.fieldErrorMsg}>
            {errors.repeatPassword?.message}
          </p>
        </div>

        {authError && (
          <div className={styles.authErrorMsg}>
            <div className={styles.icon}>
              <BiErrorAlt />
            </div>
            <p>{authError}</p>
          </div>
        )}
        <div className={styles.submitBtn}>
          <Button isLoading={isSubmitting} type={"submit"}>
            Зарегистрироваться
          </Button>
        </div>
        <AuthNavigateBar />
        <hr className={"h-px dark:bg-slate-800 bg-slate-300 border-0"} />
        <p className={"text-center"}>
          Уже есть аккаунт?{" "}
          <Link className={"underline"} to={"/login"}>
            Войти
          </Link>
        </p>
      </form>
    </div>
  )
}
