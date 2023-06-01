import React from "react"
import { useGetMangaSimilar } from "~shared/api"
import { useParams } from "react-router-dom"

export const SimilarMangaList = () => {
  const { mangaId } = useParams()
  const { data, isLoading, isError } = useGetMangaSimilar({
    mangaId: mangaId!,
  })

  if (isError) return null
  if (!isLoading && data && data.length === 0) return null

  return <div className={"container mx-auto mt-6"}></div>
}
