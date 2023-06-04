import React from "react"
import { Button, Input, Tooltip } from "~shared/components"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import {
  AiFillLock,
  BiInfoCircle,
  GiFox,
  MdAlternateEmail,
} from "react-icons/all"
import { getValidationSchema } from "../lib"
import { authByLocalModel } from "../model"

export type AuthByLocalFields = {
  email: string
  username: string
  nickName: string
  password: string
  repeatPassword: string
}

type Props = {
  onSuccess?: () => void
}

export const AuthByLocalForm = ({ onSuccess }: Props) => {
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
      const { repeatPassword, ...payload } = fields
      await authByLocalModel.registerUserFx(payload)
      if (onSuccess) onSuccess()
    } catch (e) {}
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <Input
          size={"sm"}
          icon={<GiFox />}
          {...register("username")}
          label={"Логин"}
          placeholder={"kaneki_ken"}
        />
        <p>{errors.username?.message}</p>
      </div>

      <div>
        <Input
          size={"sm"}
          icon={<GiFox />}
          {...register("nickName")}
          label={"Имя пользователя"}
          placeholder={"Канеки Кен"}
          rightIcon={
            <Tooltip
              width={300}
              label={
                "Имя пользователя можно изменить в любое время через настройки профиля"
              }
              position={"bottomLeft"}
            >
              <BiInfoCircle />
            </Tooltip>
          }
        />
        <p>{errors.username?.message}</p>
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
        <p>{errors.password?.message}</p>
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
        <p>{errors.repeatPassword?.message}</p>
      </div>

      <Button isLoading={isSubmitting} type={"submit"}>
        Зарегистрироваться
      </Button>
    </form>
  )
}
