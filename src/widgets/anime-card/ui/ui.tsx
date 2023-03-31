import React, { FC } from "react"
import { MediaCard } from "~entities/media"
import useHover from "~shared/hooks/useHover"
import { AnimeResponse } from "~shared/api"
import { RightPanel } from "./right-panel"

export interface AnimeCardProps {
  anime: AnimeResponse
}

export const AnimeCard: FC<AnimeCardProps> = ({ anime }) => {
  const [isHover, hoveredProps] = useHover(80)

  return (
    <div {...hoveredProps} className={"relative"}>
      <MediaCard media={anime} type={"anime"} />
      {isHover && <RightPanel anime={anime} />}
    </div>
  )
}
