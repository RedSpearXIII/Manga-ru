import React from "react"
import { AnimeContent } from "./ui/anime-content"
import { AdditionalInfo } from "./ui/additional-info"
import { PagePlayer } from "./ui/page-player"
import { getMediaAccentColorStyles } from "~entities/media/media-card/lib"
import { PreviewImages } from "./ui/preview-images"
import { useParams } from "react-router-dom"
import { useGetAnimeById } from "~shared/api"

const AnimeDetailingPage = () => {
  const { animeId } = useParams()

  const { data, isSuccess } = useGetAnimeById({ animeId: animeId! })

  if (!isSuccess) return <h1>error</h1>

  const mediaColorStyles = getMediaAccentColorStyles(
    data.accentColor || "#4a98ff"
  )
  return (
    <div style={mediaColorStyles}>
      <AnimeContent />
      <div className={"container mx-auto px-2"}>
        <PreviewImages />
        <AdditionalInfo />
        <PagePlayer />
      </div>
    </div>
  )
}

export default AnimeDetailingPage
