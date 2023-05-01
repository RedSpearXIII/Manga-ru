export const hslToHex = (h: number, s: number, l: number) => {
  // перевод значений hue, saturation и lightness в диапазон от 0 до 1
  h /= 360
  s /= 100
  l /= 100

  // расчет значений красной, зеленой и синей составляющих
  let r, g, b

  if (s === 0) {
    r = g = b = l // если насыщенность равна 0, то все RGB-компоненты равны яркости
  } else {
    const hue2rgb = (p: number, q: number, t: number): number => {
      if (t < 0) t += 1
      if (t > 1) t -= 1
      if (t < 1 / 6) return p + (q - p) * 6 * t
      if (t < 1 / 2) return q
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6
      return p
    }

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s
    const p = 2 * l - q

    r = hue2rgb(p, q, h + 1 / 3)
    g = hue2rgb(p, q, h)
    b = hue2rgb(p, q, h - 1 / 3)
  }

  // перевод значений RGB-компонент из диапазона от 0 до 1 в диапазон от 0 до 255 и форматирование HEX-значения
  const toHex = (c: number): string => {
    const hex = c.toString(16)
    return hex.length === 1 ? "0" + hex : hex
  }

  const hexR = toHex(Math.round(r * 255))
  const hexG = toHex(Math.round(g * 255))
  const hexB = toHex(Math.round(b * 255))

  return `#${hexR}${hexG}${hexB}`
}
