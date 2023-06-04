import React from "react"
import { AuthByLocalForm } from "~features/auth/by-local"
import { AuthByServices, AuthForm } from "~shared/components"
import { useStore } from "effector-react"
import { authByLocalModel } from "~features/auth/by-local"
import { authByShikimoriModel } from "~features/auth/by-shikimori"
import { useNavigate } from "react-router-dom"

const SignupPage = () => {
  const { authError } = useStore(authByLocalModel.$authByLocal)
  const navigate = useNavigate()

  const onSignupSuccess = () => {
    navigate("/")
  }

  return (
    <div>
      <AuthForm>
        <AuthForm.Form>
          <AuthByLocalForm onSuccess={onSignupSuccess} />
        </AuthForm.Form>
        {authError && <AuthForm.AuthError>{authError}</AuthForm.AuthError>}
        <AuthForm.AuthBarByServices>
          <AuthByServices authByShikimori={authByShikimoriModel.loginFx} />
        </AuthForm.AuthBarByServices>
      </AuthForm>
    </div>
  )
}

export default SignupPage
