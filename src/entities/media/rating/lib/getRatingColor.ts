export const getRatingColor = (rating: number) => {
  if (rating <= 3) return "red"
  if (rating <= 7) return "orange"
  return "green"
}
