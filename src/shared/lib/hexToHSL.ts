export const hexToHSL = (hex: string) => {
  hex = hex.replace(/#/g, "")
  if (hex.length === 3) {
    hex = hex
      .split("")
      .map((char) => char + char)
      .join("")
  }

  // Преобразование HEX в RGB
  const red = parseInt(hex.substring(0, 2), 16) / 255
  const green = parseInt(hex.substring(2, 4), 16) / 255
  const blue = parseInt(hex.substring(4, 6), 16) / 255

  // Вычисление HSL
  const max = Math.max(red, green, blue)
  const min = Math.min(red, green, blue)
  let hue = 0
  let saturation
  const lightness = (max + min) / 2

  if (max === min) {
    hue = saturation = 0
  } else {
    const delta = max - min
    saturation = lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min)

    switch (max) {
      case red:
        hue = (green - blue) / delta + (green < blue ? 6 : 0)
        break
      case green:
        hue = (blue - red) / delta + 2
        break
      case blue:
        hue = (red - green) / delta + 4
        break
    }

    hue /= 6
  }

  // Формирование строки HSL
  hue = Math.round(hue * 360)
  saturation = Math.round(saturation * 100)
  const lightnessPercent = Math.round(lightness * 100)

  return { hue, saturation, lightnessPercent }
}
