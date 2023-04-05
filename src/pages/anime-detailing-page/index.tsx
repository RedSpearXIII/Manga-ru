import React from "react"
import { useGetAnimeById } from "~shared/api/queries/anime"
import { useParams } from "react-router-dom"
import { AnimeContent } from "./ui"

const AnimeDetailingPage = () => {
  const { animeId } = useParams()

  const { data, isLoading } = useGetAnimeById({ id: animeId! })

  if (!data && isLoading) return <h6>Error</h6>

  return (
    <div>
      <AnimeContent />
      <div className={"container mx-auto px-5"}></div>
    </div>
  )
}

export default AnimeDetailingPage
