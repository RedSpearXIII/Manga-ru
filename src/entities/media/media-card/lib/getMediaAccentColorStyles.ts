import React from "react"
import { hexToHue } from "~shared/lib/hexToHue"
import { hexToHSL } from "~shared/lib"

//TODO: доработать функцию преобразования

const getBgTextColorLightness = (lightnessPercent: number) => {
  return lightnessPercent >= 50 ? 0 : 100
}

export const getMediaAccentColorStyles = (hex: string) => {
  const hueText = hexToHue(hex)
  const { hue, saturation, lightnessPercent } = hexToHSL(hex)

  const bgTextColorLightness = getBgTextColorLightness(lightnessPercent)

  return {
    "--card-text-color": `hsl(${hueText},80%,70%)`,
    "--card-background-color": `hsl(${hue},${saturation}%,${lightnessPercent}%)`,
    "--card-background-text-color": `hsl(${hueText},50%,${bgTextColorLightness}%)`,
    "--card-overlay-text-color": `hsl(${hueText},80%,70%)`,
  } as React.CSSProperties
}
