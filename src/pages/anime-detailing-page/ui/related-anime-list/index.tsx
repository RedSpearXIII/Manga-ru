import React from "react"
import { useGetRelatedAnime } from "~shared/api"
import { useParams } from "react-router-dom"
import { RelatedMediaList } from "~widgets/related-media-list"

export const RelatedAnimeList = () => {
  const { animeUrl } = useParams()
  const { data, isLoading, isError } = useGetRelatedAnime(animeUrl!)

  if (isError) return null
  if (!isLoading && data && data.length === 0) return null

  const listData = isLoading
    ? []
    : data.map((anime, index) => ({
        ...anime,
        relationType: index === 0 ? "Предыстория" : "Продолжение",
      }))

  return (
    <div>
      <RelatedMediaList
        isLoading={isLoading}
        listData={listData}
        listType={"anime"}
      />
    </div>
  )
}
