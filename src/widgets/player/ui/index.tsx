import React, { useRef } from "react"
import styles from "./styles.module.pcss"
import { getPlayerLinkFromParams } from "../lib"
import { InViewPlaybackController } from "~features/player/in-view-playback-controller"

interface PlayerProps {
  playerLink: string
}

export const Player = ({ playerLink }: PlayerProps) => {
  const playerRef = useRef(null)

  const playerLinkWithSettings = getPlayerLinkFromParams({
    params: { season: 1, episode: 1 },
    playerLink,
  })

  return (
    <div className={styles.playerContainer}>
      <InViewPlaybackController playerRef={playerRef} />
      <iframe
        ref={playerRef}
        className={styles.player}
        src={playerLinkWithSettings}
        allowFullScreen
      />
    </div>
  )
}
