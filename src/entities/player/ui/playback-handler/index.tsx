import React, { useEffect, useState } from "react"

type Props = {
  onPause?: () => void
  onPlay?: () => void
  onFirstPlay?: () => void
}

export const PlaybackHandler = ({ onPlay, onPause, onFirstPlay }: Props) => {
  const [playerAlreadyStarted, setPlayerAlreadyStarted] = useState(false)

  useEffect(() => {
    const handleFirstPlayerStart = (message: MessageEvent) => {
      if (message.data.key == "kodik_player_play") {
        setPlayerAlreadyStarted(true)
        if (onFirstPlay && !playerAlreadyStarted) onFirstPlay()
      }
    }
    const handlePlayerPlay = (message: MessageEvent) => {
      if (message.data.key == "kodik_player_play") {
        if (onPlay) onPlay()
      }
    }
    const handlePlayerPause = (message: MessageEvent) => {
      if (message.data.key == "kodik_player_play") {
        if (onPause) onPause()
      }
    }

    window.addEventListener("message", handleFirstPlayerStart)
    window.addEventListener("message", handlePlayerPlay)
    window.addEventListener("message", handlePlayerPause)

    return () => {
      window.removeEventListener("message", handleFirstPlayerStart)
      window.removeEventListener("message", handlePlayerPlay)
      window.removeEventListener("message", handlePlayerPause)
    }
  }, [])

  return null
}
