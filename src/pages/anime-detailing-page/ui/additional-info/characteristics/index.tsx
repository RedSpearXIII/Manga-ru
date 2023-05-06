import React from "react"
import styles from "./styles.module.pcss"
import { InfoItem } from "../info-item"
import { translateAnimeType, translateMediaStatus } from "~entities/media"
import { format, parseISO } from "date-fns"
import { ru } from "date-fns/locale"
import { useParams } from "react-router-dom"
import { useGetAnimeByUrl } from "~shared/api"

export const Characteristics = () => {
  const { animeUrl } = useParams()

  const { data, isLoading, isSuccess } = useGetAnimeByUrl({
    animeUrl: animeUrl!,
  })
  if (isLoading) return null
  if (!isSuccess) return null

  const type = translateAnimeType(data.type)
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

  return (
    <div className={styles.characteristics}>
      <InfoItem color={"emerald-400"} title={"Серий"} value={seasons} />
      <InfoItem color={"cyan-500"} title={"Стартовал"} value={airedAt} />
      <InfoItem color={"orange-300"} title={"Выпущен"} value={releasedAt} />
      <InfoItem color={"rose-500"} title={"Год"} value={year} />
      {data.status && (
        <InfoItem color={"purple-400"} title={"Статус"} value={status} />
      )}
      <InfoItem color={"pink-400"} title={"Тип"} value={type} />
    </div>
  )
}
