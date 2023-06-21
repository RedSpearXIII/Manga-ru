import React from "react"
import { AuthForm } from "~widgets/auth-form"
import { useNavigate } from "react-router-dom"

const AuthPage = () => {
  const navigate = useNavigate()
  const onSuccess = () => {
    navigate("/")
  }

  return (
    <div>
      <AuthForm onLoginSuccess={onSuccess} onSignupSuccess={onSuccess} />
    </div>
  )
}

export default AuthPage
