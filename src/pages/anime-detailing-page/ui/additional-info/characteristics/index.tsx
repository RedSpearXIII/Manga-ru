import React from "react"
import styles from "./styles.module.pcss"
import { InfoItem } from "../info-item"
import { translateAnimeType, translateMediaStatus } from "~entities/media"
import { format, parseISO } from "date-fns"
import { ru } from "date-fns/locale"
import { useNavigate, useParams } from "react-router-dom"
import { useGetAnimeByUrl } from "~shared/api"
import { animeListFilterModel } from "~features/anime-list-filter"

export const Characteristics = () => {
  const navigate = useNavigate()
  const { animeUrl } = useParams()

  const { data, isLoading, isSuccess } = useGetAnimeByUrl({
    animeUrl: animeUrl!,
  })
  if (isLoading) return null
  if (!isSuccess) return null

  const type = data.type ? translateAnimeType(data.type) : "?"
  const status = translateMediaStatus(data.status)
  const seasons = `${data.episodesCountAired || "?"} / ${
    data.episodesCount || "?"
  }`
  const releasedAt = data.releasedAt
    ? format(parseISO(data.releasedAt), "d MMM yyyyг", {
        locale: ru,
      })
    : "Еще выходит"
  const airedAt = format(parseISO(data.airedAt), "d MMM yyyyг", {
    locale: ru,
  })
  const year =
    data.year ||
    format(parseISO(data.airedAt), "yyyy", {
      locale: ru,
    })

  const showAnimeWithYear = () => {
    if (!data.year) return
    animeListFilterModel.resetFilter()
    animeListFilterModel.setYears({ years: [data.year.toString()] })
    navigate("/anime", { preventScrollReset: false })
  }
  const showAnimeWithStatus = () => {
    if (!data.status) return
    animeListFilterModel.resetFilter()
    animeListFilterModel.setStatus({ status: data.status })
    navigate("/anime")
  }
  const showAnimeWithType = () => {
    if (!data.type) return
    animeListFilterModel.resetFilter()
    animeListFilterModel.setType({ type: data.type })
    navigate("/anime")
  }

  return (
    <div className={styles.characteristics}>
      <InfoItem color={"emerald-400"} title={"Серий"} value={seasons} />
      <InfoItem color={"cyan-500"} title={"Стартовал"} value={airedAt} />
      <InfoItem color={"orange-300"} title={"Выпущен"} value={releasedAt} />
      <div className={"cursor-pointer"} onClick={showAnimeWithYear}>
        <InfoItem color={"rose-500"} title={"Год"} value={year} />
      </div>
      {data.status && (
        <div onClick={showAnimeWithStatus} className={"cursor-pointer"}>
          <InfoItem color={"purple-400"} title={"Статус"} value={status} />
        </div>
      )}
      <div onClick={showAnimeWithType} className={"cursor-pointer"}>
        <InfoItem color={"pink-400"} title={"Тип"} value={type} />
      </div>
    </div>
  )
}
