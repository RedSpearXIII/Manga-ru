import React from "react"
import styles from "./styles.module.pcss"

type Props = {
  url?: string
}

const Avatar = ({ url }: Props) => {
  return (
    <div className={styles.avatar}>
      <img alt={"user avatar"} src={url ? url : "/anifox-logo.webp"} />
    </div>
  )
}

export default Avatar
