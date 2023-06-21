import React from "react"
import { Button, Input } from "~shared/components"
import { SubmitHandler, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { AiFillLock, BiErrorAlt, MdAlternateEmail } from "react-icons/all"
import { getValidationSchema } from "../lib"
import { loginModel } from "../model"
import styles from "~features/auth/by-local/ui/styles.module.pcss"
import { useStore } from "effector-react"

export type LoginFields = {
  email: string
  password: string
}

type Props = {
  onSuccess?: () => void
}

export const LoginForm = ({ onSuccess }: Props) => {
  const LoginSchema = getValidationSchema()

  const { loginError } = useStore(loginModel.$login)

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
      <Button isLoading={isSubmitting} type={"submit"}>
        Войти
      </Button>
    </form>
  )
}
