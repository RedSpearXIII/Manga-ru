import React, { useRef } from "react"
import styles from "./styles.module.pcss"
import { getPlayerLinkFromParams } from "../lib"

interface PlayerProps {
  playerLink: string
}

//TODO: Пофиксить скролл до вверха страницы после закрытия плеера и переключения серии

export const Player = ({ playerLink }: PlayerProps) => {
  const playerRef = useRef(null)

  const playerLinkWithSettings = getPlayerLinkFromParams({
    params: { season: 1, episode: 1 },
    playerLink,
  })

  return (
    <div className={styles.playerContainer}>
      <iframe
        ref={playerRef}
        className={styles.player}
        src={playerLinkWithSettings}
        allowFullScreen
      />
    </div>
  )
}
