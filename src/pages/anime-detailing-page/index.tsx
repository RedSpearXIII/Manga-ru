import React from "react"
import { AnimeContent } from "./ui/anime-content"
import { AdditionalInfo } from "./ui/additional-info"
import { PagePlayer } from "./ui/page-player"

const AnimeDetailingPage = () => {
  return (
    <div>
      <AnimeContent />
      <div className={"container mx-auto px-2"}>
        <AdditionalInfo />
        <PagePlayer />
      </div>
    </div>
  )
}

export default AnimeDetailingPage
