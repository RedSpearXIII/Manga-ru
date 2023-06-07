import React from "react"
import styles from "./styles.module.pcss"
import { Badge } from "~shared/components"

export const BannerContent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bannerContent}>
        <div className={styles.presentUser}>
          <img
            className={styles.userAvatar}
            alt={"Изоюражение пользователя"}
            src={
              "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b6207770-GboHiOye7nVj.jpg"
            }
          />
          <h3 className={styles.username}>YockyMai</h3>
        </div>
        <div className={styles.stats}>
          <div className={styles.statsItem}>
            <p>Время за просмотром: </p>
            <Badge>132ч. 43мин.</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
