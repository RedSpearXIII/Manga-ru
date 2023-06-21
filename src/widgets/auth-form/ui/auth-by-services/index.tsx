import React from "react"
import styles from "./styles.module.pcss"
import vkLogo from "./assets/vk-logo.webp"
import googleLogo from "./assets/google-logo.webp"
import shikomoriLogo from "./assets/shikomori-logo.svg"

type Props = {
  authByShikimori: () => void
  authByGoogle?: () => void
  authByVk?: () => void
}

const AuthByServices = ({ authByShikimori, authByVk, authByGoogle }: Props) => {
  return (
    <div className={styles.authNavigateBar}>
      <p className={styles.loginText}>Войти через</p>
      <div className={styles.services}>
        <div onClick={authByGoogle} className={styles.authByServiceBtn}>
          <img alt={"Google"} src={googleLogo} />
          <p>Google</p>
        </div>
        <div onClick={authByShikimori} className={styles.authByServiceBtn}>
          <img
            alt={"Шикомори"}
            src={shikomoriLogo}
            className={"invert dark:invert-0"}
          />
          <p>Шикомори</p>
        </div>
        <div onClick={authByVk} className={styles.authByServiceBtn}>
          <img alt={"VK"} src={vkLogo} />
          <p>Вконтакте</p>
        </div>
      </div>
    </div>
  )
}

export default AuthByServices
