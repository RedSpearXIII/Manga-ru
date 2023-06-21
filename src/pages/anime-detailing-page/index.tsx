import React from "react"
import {
  AnimeContent,
  PreviewMedia,
  PagePlayer,
  RelatedAnimeList,
  AnimeStatusDistributionChart,
} from "./ui"

const AnimeDetailingPage = () => {
  return (
    <div>
      <AnimeContent />
      <div className={"container mx-auto px-2"}>
        <PreviewMedia />
        <div
          className={
            "grid grid-cols-[400px_auto] max-sm:grid-cols-1 gap-1 my-5"
          }
        >
          <AnimeStatusDistributionChart />
          {/*<div>1</div>*/}
        </div>
        <RelatedAnimeList />
        <PagePlayer />
      </div>
    </div>
  )
}

export default AnimeDetailingPage
