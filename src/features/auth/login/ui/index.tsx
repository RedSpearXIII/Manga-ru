import React from "react"
import { Button, Input } from "~shared/components"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { AiFillLock, MdAlternateEmail } from "react-icons/all"
import { getValidationSchema } from "../lib"
import { loginModel } from "../model"

export type LoginFields = {
  email: string
  password: string
}

type Props = {
  onSuccess?: () => void
}

export const LoginForm = ({ onSuccess }: Props) => {
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
      await loginModel.loginUserFx(fields)
      if (onSuccess) onSuccess()
    } catch (e) {}
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <p>{errors.email?.message}</p>
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

      <Button isLoading={isSubmitting} type={"submit"}>
        Войти
      </Button>
    </form>
  )
}
