import React from "react"
import { StatusDistributionChart } from "~entities/media-status"
import {
  AnimeTrackStatuses,
  FavoriteListDistributionResponse,
  useGetFavoriteListDistribution,
} from "~shared/api"
import { useParams } from "react-router-dom"

const convertDistribution = (data: FavoriteListDistributionResponse | null) => {
  if (!data) return []
  const convertedData: { name: AnimeTrackStatuses; value: number }[] = []
  for (let status in data) {
    convertedData.push({
      name: status as AnimeTrackStatuses,
      value: data[status as AnimeTrackStatuses],
    })
  }
  return convertedData
}

export const AnimeStatusDistributionChart = () => {
  const { animeUrl } = useParams()
  const { data, isError } = useGetFavoriteListDistribution(animeUrl!)

  if (isError) return null

  const distributionData = convertDistribution(data || null)

  return (
    <div className={"my-5"}>
      <h3>В списках у людей</h3>
      <StatusDistributionChart distributionData={distributionData} />
    </div>
  )
}
