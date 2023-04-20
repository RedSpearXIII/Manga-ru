import React, { FC } from "react"
import { MediaCard } from "~entities/media"
import { useHover } from "~shared/hooks"
import { AnimeResponse } from "~shared/api"
import { RightPanel } from "./right-panel"
import { getMediaAccentColorStyles } from "~entities/media/media-card/lib"

export interface AnimeCardProps {
  anime: AnimeResponse
}

export const AnimeCard: FC<AnimeCardProps> = ({ anime }) => {
  const [isHover, hoveredProps] = useHover(80)
  const cardAccentColorsStyles = getMediaAccentColorStyles(
    anime.accentColor || "#FFFFFF"
  )

  return (
    <div
      {...hoveredProps}
      className={"w-full relative"}
      style={cardAccentColorsStyles}
    >
      <MediaCard media={anime} type={"anime"} />
      {isHover && <RightPanel anime={anime} />}
    </div>
  )
}
