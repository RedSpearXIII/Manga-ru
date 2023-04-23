import React, { FC, lazy, Suspense } from "react"
import { MediaCard } from "~entities/media"
import { useHover, useScreenSize } from "~shared/hooks"
import { AnimeResponse } from "~shared/api"
import { getMediaAccentColorStyles } from "~entities/media/media-card/lib"
import { getUserDeviceType } from "~shared/lib"
import { Breakpoints } from "~shared/types"

const RightPanel = lazy(() =>
  import("./right-panel").then((module) => ({ default: module.RightPanel }))
)

export interface AnimeCardProps {
  anime: AnimeResponse
}

export const AnimeCard: FC<AnimeCardProps> = ({ anime }) => {
  const [isHover, hoveredProps] = useHover(80)
  const cardAccentColorsStyles = getMediaAccentColorStyles(
    anime.accentColor || "#FFFFFF"
  )

  const screenSize = useScreenSize()
  const userDeviceType = getUserDeviceType()

  const isLoadRightPanel =
    screenSize >= Breakpoints.sm && userDeviceType === "desktop"

  return (
    <div
      {...hoveredProps}
      className={"w-full relative"}
      style={cardAccentColorsStyles}
    >
      <MediaCard media={anime} type={"anime"} />
      {isLoadRightPanel && (
        <Suspense>{isHover && <RightPanel anime={anime} />}</Suspense>
      )}
    </div>
  )
}
