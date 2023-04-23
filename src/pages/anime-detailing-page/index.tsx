import React from "react"
import { AnimeContent, PreviewMedia, PagePlayer, AdditionalInfo } from "./ui"

const AnimeDetailingPage = () => {
  return (
    <div>
      <AnimeContent />
      <div className={"container mx-auto px-2"}>
        <PreviewMedia />
        <AdditionalInfo />
        <PagePlayer />
      </div>
    </div>
  )
}

export default AnimeDetailingPage
