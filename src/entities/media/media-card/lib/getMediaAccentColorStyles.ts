import React from "react"
import { hexToHSL, hexToHue, hexToRgb, hslToHex } from "~shared/lib/colors"

function getContrastColor(hex: string): string {
  // удаление символа # (если он есть)
  hex = hex.replace("#", "")

  // разбиение на составляющие RGB
  const { r, g, b } = hexToRgb(hex)

  // расчет контрастности с белым и черным цветом
  const brightness = Math.round((r * 299 + g * 587 + b * 114) / 1000)

  // Если цвет темный, то возвращаем белый цвет, иначе возвращаем черный цвет
  if (brightness < 128) {
    return "#FFFFFF" // белый цвет
  } else {
    return "#000000" // черный цвет
  }
}

export const getMediaAccentColorStyles = (hex: string) => {
  const hueText = hexToHue(hex)
  const { hue, saturation, lightnessPercent } = hexToHSL(hex)

  const bgHex = hslToHex(hue, saturation, lightnessPercent)
  const bgTextColorLightness = getContrastColor(bgHex)

  return {
    "--card-text-color": `hsl(${hueText},80%,70%)`,
    "--card-background-color": `hsl(${hue},${saturation}%,${lightnessPercent}%)`,
    "--card-background-text-color": bgTextColorLightness,
    "--card-overlay-text-color": `hsl(${hueText},80%,70%)`,
  } as React.CSSProperties
}
