import React, { FC } from "react"
import styles from "./styles.module.pcss"
import { getPlayerLinkFromParams } from "../lib"

interface AnimePlayerProps {
  playerLink: string
}

export const AnimePlayer: FC<AnimePlayerProps> = ({ playerLink }) => {
  const playerLinkWithSettings = getPlayerLinkFromParams({
    params: { season: 1, episode: 1 },
    playerLink,
  })

  return (
    <div className={styles.playerContainer}>
      <iframe
        className={styles.player}
        src={playerLinkWithSettings}
        allowFullScreen
      />
    </div>
  )
}
