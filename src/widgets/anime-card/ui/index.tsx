import React, { FC } from "react"
import { MediaCard } from "~entities/media"
import { useHover } from "~shared/hooks"
import { AnimeResponse } from "~shared/api"
import { RightPanel } from "./right-panel"
import { convertToHue } from "~entities/media/media-card/lib"

export interface AnimeCardProps {
  anime: AnimeResponse
}

const hue = convertToHue("#FFFFFF")

const cardAccentColors = {
  "--card-text-color": `hsl(${hue},80%,70%)`,
  "--card-background-color": `hsl(${hue},73%,60%)`,
  "--card-background-text-color": `hsl(${hue},100%,94%)`,
  "--card-overlay-text-color": `hsl(${hue},80%,70%)`,
} as React.CSSProperties
//TODO: apply hue form server response color

export const AnimeCard: FC<AnimeCardProps> = ({ anime }) => {
  const [isHover, hoveredProps] = useHover(80)

  return (
    <div {...hoveredProps} className={"relative"} style={cardAccentColors}>
      <MediaCard media={anime} type={"anime"} />
      {isHover && <RightPanel anime={anime} />}
    </div>
  )
}
