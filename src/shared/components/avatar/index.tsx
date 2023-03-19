import React, { FC } from "react"
import styles from "./styles.module.pcss"

interface AvatarProps {
  url?: string
}

const Avatar: FC<AvatarProps> = ({ url }) => {
  return (
    <div className={styles.avatar}>
      <img alt={"user avatar"} src={url ? url : "/anifox-logo.png"} />
    </div>
  )
}

export default Avatar
