import React from "react"
import {
  AnimeContent,
  PreviewMedia,
  PagePlayer,
  AdditionalInfo,
  RelatedAnimeList,
} from "./ui"

const AnimeDetailingPage = () => {
  return (
    <div>
      <AnimeContent />
      <div className={"container mx-auto px-2"}>
        <PreviewMedia />
        <AdditionalInfo />
        <RelatedAnimeList />
        <PagePlayer />
      </div>
    </div>
  )
}

export default AnimeDetailingPage
