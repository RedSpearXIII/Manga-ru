import React from "react"
import styles from "./styles.module.pcss"
import vkLogo from "../assets/vk-logo.webp"
import googleLogo from "../assets/google-logo.avif"
import shikomoriLogo from "../assets/shikomori-logo.svg"

export const AuthNavigateBar = () => {
  return (
    <div className={styles.authNavigateBar}>
      <p className={styles.loginText}>Войти через</p>
      <div className={styles.services}>
        <div className={styles.authByServiceBtn}>
          <img alt={"Google"} src={googleLogo} />
          <p>Google</p>
        </div>
        <div className={styles.authByServiceBtn}>
          <img
            alt={"Шикомори"}
            src={shikomoriLogo}
            className={"invert dark:invert-0"}
          />
          <p>Шикомори</p>
        </div>
        <div className={styles.authByServiceBtn}>
          <img alt={"VK"} src={vkLogo} />
          <p>Вконтакте</p>
        </div>
      </div>
    </div>
  )
}
