import React from "react"
import styles from "../styles.module.pcss"
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
    <div className={styles.infoBlock}>
      <p className={styles.title}>Об аниме: </p>
      <div className={styles.content}>
        <div className={styles.item}>Серий: {seasons}</div>
        <div className={styles.item}>Стартовал: {airedAt}</div>
        <div className={styles.item}>Выпущен: {releasedAt}</div>
        <div className={styles.item} onClick={showAnimeWithYear}>
          Год: {year}
        </div>
        {data.status && (
          <div className={styles.item} onClick={showAnimeWithStatus}>
            Статус: {status}
          </div>
        )}
        <div onClick={showAnimeWithType} className={styles.item}>
          Тип: {type}
        </div>
      </div>
    </div>
  )
}
