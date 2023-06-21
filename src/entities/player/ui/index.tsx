import React from "react"
import { PlaybackHandler } from "./playback-handler"
import styles from "./styles.module.pcss"

export const Player = () => {
  return (
    <div>
      <PlaybackHandler />
      <div className={styles.playerContainer}>
        <iframe
          src={
            "//kodik.info/serial/50455/9c631db89b1b9c257ff624cc92542db0/720p?season=1&episode=1"
          }
          className={styles.player}
          allowFullScreen={false}
        />
        <div
          onClick={() => {
            document.documentElement.requestFullscreen()
          }}
          className={styles.fullScreenBtn}
        />
      </div>
    </div>
  )
}
