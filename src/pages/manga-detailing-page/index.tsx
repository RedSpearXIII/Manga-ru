import React from "react"

import { MangaContent } from "./ui/manga-content"
import { useGetMangaById } from "~shared/api"
import { useParams } from "react-router-dom"
import SimilarMangaList from "./ui/similar-manga-list"

const MangaDetailingPage = () => {
  const { mangaId } = useParams()

  const { isError, data } = useGetMangaById({ mangaId: mangaId! })
  console.log(data)
  if (isError) return <h1>Такой манги не сущетсвует</h1>
  return (
    <div>
      <MangaContent />
      <SimilarMangaList />
    </div>
  )
}

export default MangaDetailingPage
