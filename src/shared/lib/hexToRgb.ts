export const hexToRgb = (hex: string) => {
  hex = hex.replace("#", "")

  // определение значений красной, зеленой и синей составляющих
  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  // возвращение значения в формате RGB
  return { r, g, b }
}
