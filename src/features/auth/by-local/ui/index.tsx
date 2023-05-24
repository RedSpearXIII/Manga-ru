import React from "react"
import { Button, Input } from "~shared/components"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { AiFillLock, GiFox, MdAlternateEmail } from "react-icons/all"
import { getValidationSchema } from "../lib"
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
      await authByLocalModel.registerUserFx(fields)
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
          label={"Имя пользователя"}
          placeholder={"Канеки Кен"}
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
