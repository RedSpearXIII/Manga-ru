import React from "react"
import { useParams } from "react-router-dom"

const MangaDetailingPage = () => {
  const { mangaId } = useParams()

  return (
    <div>
      <h1>{mangaId}</h1>
    </div>
  )
}

export default MangaDetailingPage
