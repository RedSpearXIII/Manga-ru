import React from "react"
import { SimilarMangaList, MangaContent } from "./ui"
import { useGetMangaById } from "~shared/api"
import { useParams } from "react-router-dom"

const MangaDetailingPage = () => {
  const { mangaId } = useParams()

  const { isError } = useGetMangaById({ mangaId: mangaId! })

  if (isError) return <h1>Такой манги не сущетсвует</h1>

  return (
    <div className={"px-2"}>
      <MangaContent />
      <SimilarMangaList />
    </div>
  )
}

export default MangaDetailingPage
