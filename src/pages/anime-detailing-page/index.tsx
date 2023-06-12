import React from "react"
import {
  AnimeContent,
  PreviewMedia,
  PagePlayer,
  RelatedAnimeList,
  StatusDistribution,
} from "./ui"

const AnimeDetailingPage = () => {
  return (
    <div>
      <AnimeContent />
      <div className={"container mx-auto px-2"}>
        <PreviewMedia />
        <div className={"flex items-center justify-between flex-wrap"}>
          <StatusDistribution />
        </div>
        <RelatedAnimeList />
        <PagePlayer />
      </div>
    </div>
  )
}

export default AnimeDetailingPage
