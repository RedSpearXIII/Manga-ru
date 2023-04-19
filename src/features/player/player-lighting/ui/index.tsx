import React, { useEffect } from "react"

export const PlayerLighting = () => {
  function playerMessageListener(message: MessageEvent<any>) {
    if (message.data.key == "kodik_player_time_update") {
    }
  }

  useEffect(() => {
    window.addEventListener("message", playerMessageListener)

    return () => {
      window.removeEventListener("message", playerMessageListener)
    }
  }, [])

  return <div></div>
}
