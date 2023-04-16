import React from "react"
import { convertToHue } from "./convertToHue"

export const getMediaAccentColorStyles = (hex: string) => {
  const hue = convertToHue(hex)
  //TODO: apply hue form server response color

  return {
    "--card-text-color": `hsl(${hue},80%,70%)`,
    "--card-background-color": `hsl(${hue},73%,60%)`,
    "--card-background-text-color": `hsl(${hue},100%,94%)`,
    "--card-overlay-text-color": `hsl(${hue},80%,70%)`,
  } as React.CSSProperties
}
