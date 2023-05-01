import React from "react"
import styles from "./styles.module.pcss"
import { Frames } from "./frames"
import { Trailers } from "./trailers"
import { getUserDeviceType } from "~shared/lib/user"
import clsx from "clsx"

export const PreviewMedia = () => {
  const userDevice = getUserDeviceType()

  return (
    <div
      className={clsx(styles.wrapper, userDevice === "desktop" && "scrollbar")}
    >
      <div className={styles.mediaBox}>
        <Trailers />
      </div>
      <div className={styles.mediaBox}>
        <Frames />
      </div>
    </div>
  )
}
