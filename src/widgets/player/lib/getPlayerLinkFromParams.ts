type PlayerParams = {
  playerLink: string
  params: {
    geoblock?: string
    season?: number
    episode?: number
  }
}

export const getPlayerLinkFromParams = ({
  params,
  playerLink,
}: PlayerParams) => {
  const paramsCount = Object.getOwnPropertyNames(params).length

  const paramsArray: { key: string; value: string }[] = []

  for (const [key, value] of Object.entries(params)) {
    paramsArray.push({ key, value: value.toString() })
  }

  const paramsString = paramsArray
    .map((param) => `${param.key}=${param.value}`)
    .join("&")

  if (paramsCount === 0) return playerLink

  return `${playerLink}?${paramsString}`
}
