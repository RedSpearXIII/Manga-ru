import React from "react"
import styles from "./styles.module.pcss"
import { AuthByLocal } from "~features/auth/by-local"

const SignupPage = () => {
  return (
    <div className={styles.wrapper}>
      <AuthByLocal />
    </div>
  )
}

export default SignupPage
