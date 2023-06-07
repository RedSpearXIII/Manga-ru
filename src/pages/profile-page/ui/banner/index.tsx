import React from "react"
import styles from "./styles.module.pcss"
import clsx from "clsx"
import { BannerContent } from "./banner-content"

export const Banner = () => {
  return (
    <div
      className={clsx(styles.banner)}
      style={{
        backgroundImage: `url(https://s4.anilist.co/file/anilistcdn/user/banner/b6207770-0xBx3v8Bv9Ym.jpg)`,
      }}
    >
      <div className={styles.bannerShadow} />
      <BannerContent />
    </div>
  )
}
