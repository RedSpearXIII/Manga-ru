import React from "react"
import styles from "./styles.module.pcss"
import { Button, Input } from "~shared/components"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {
  BiErrorAlt,
  GiFox,
  MdAlternateEmail,
  MdPassword,
  TbPassword,
} from "react-icons/all"
import { getValidationSchema } from "../lib"
import { useAuthByLocalStore } from "../model"

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
  const { authByLocal, authError, isLoading } = useAuthByLocalStore()
  const AuthByLocalSchema = getValidationSchema()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthByLocalFields>({
    resolver: yupResolver(AuthByLocalSchema),
  })

  const onSubmit = async (fields: AuthByLocalFields) => {
    try {
      await authByLocal(fields)
      if (onSuccess) onSuccess()
    } catch (e) {}
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h3>Регистрация</h3>
        <div>
          <Input
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
            icon={<GiFox />}
            {...register("username")}
            label={"Имя пользователя"}
            placeholder={"Канеки Кен"}
          />
          <p className={styles.fieldErrorMsg}>{errors.username?.message}</p>
        </div>
        <div>
          <Input
            type={"password"}
            icon={<TbPassword />}
            {...register("password")}
            label={"Пароль"}
            placeholder={"Введите пароль"}
          />
          <p className={styles.fieldErrorMsg}>{errors.password?.message}</p>
        </div>
        <div>
          <Input
            type={"password"}
            icon={<MdPassword />}
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
          <Button isLoading={isLoading} type={"submit"}>
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  )
}