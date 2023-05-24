import React from "react"
import { LoginForm } from "~features/auth/login"
import { AuthByServices, AuthForm } from "~shared/components"
import { loginModel } from "~features/auth/login"
import { authByShikimoriModel } from "~features/auth/by-shikimori"
import { useStore } from "effector-react"

const LoginPage = () => {
  const { loginError } = useStore(loginModel.$login)
  return (
    <div>
      <AuthForm>
        <AuthForm.Form>
          <LoginForm />
        </AuthForm.Form>
        {loginError && <AuthForm.AuthError>{loginError}</AuthForm.AuthError>}
        <AuthForm.AuthBarByServices>
          <AuthByServices authByShikimori={authByShikimoriModel.loginFx} />
        </AuthForm.AuthBarByServices>
      </AuthForm>
    </div>
  )
}

export default LoginPage
