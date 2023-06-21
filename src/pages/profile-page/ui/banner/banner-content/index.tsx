import React from "react"
import styles from "./styles.module.pcss"
import { Badge } from "~shared/components"
import { useStore } from "effector-react"
import { viewerModel } from "~entities/viewer"

export const BannerContent = () => {
  const { viewer } = useStore(viewerModel.$viewer)
  return (
    <div className={styles.wrapper}>
      <div className={styles.bannerContent}>
        <div className={styles.presentUser}>
          <img
            className={styles.userAvatar}
            alt={"Изображение пользователя"}
            src={
              "https://s4.anilist.co/file/anilistcdn/user/avatar/large/b6207770-GboHiOye7nVj.jpg"
            }
          />
          <h3 className={styles.username}>{viewer.nickName}</h3>
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
