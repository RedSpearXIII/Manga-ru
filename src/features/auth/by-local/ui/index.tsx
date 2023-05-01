import React, { FC } from "react"
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

interface AuthByLocalProps {
  onSuccess?: () => void
  onError?: (message: string) => void
}

export const AuthByLocal: FC<AuthByLocalProps> = () => {
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
    await authByLocal({
      email: fields.email,
      password: fields.password,
      username: fields.username,
    })
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <h5>Регистрация</h5>
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
