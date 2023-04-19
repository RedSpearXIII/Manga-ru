import React from "react"
import styles from "./styles.module.pcss"
import { useGetAnimeById } from "~shared/api"
import { useParams } from "react-router-dom"
import { InfoItem } from "./info-item"
import { translateAnimeType, translateMediaStatus } from "~entities/media"
import { format, parseISO } from "date-fns"
import { ru } from "date-fns/locale"

export const AdditionalInfo = () => {
  const { animeId } = useParams()

  const { data, isLoading, isSuccess } = useGetAnimeById({ animeId: animeId! })

  if (isLoading) return null
  if (!isSuccess) return null

  const type = translateAnimeType(data.type)
  const status = translateMediaStatus(data.status)
  const seasons = `${data.episodesCountAired || "?"} / ${
    data.episodesCount || "?"
  }`
  const releasedAt = format(parseISO(data.releasedAt), "d MMM yyyyг", {
    locale: ru,
  })
  const airedAt = format(parseISO(data.airedAt), "d MMM yyyyг", {
    locale: ru,
  })
  const year =
    data.year ||
    format(parseISO(data.airedAt), "yyyy", {
      locale: ru,
    })

  return (
    <div className={styles.additionalInfoContainer}>
      <div className={styles.infoBox}>
        <h6>Дополнительная информация</h6>
        <div className={styles.infoContent}>
          <InfoItem title={"Серий"} value={seasons} />
          <InfoItem title={"Стартовал"} value={airedAt} />
          <InfoItem title={"Выпущен"} value={releasedAt} />
          <InfoItem title={"Год"} value={year} />
          {data.status && <InfoItem title={"Статус"} value={status} />}
          <InfoItem title={"Тип"} value={type} />
        </div>
      </div>
      <div className={styles.infoBox}>
        <h6>В списках у людей</h6>
        <div className={styles.statusDistribution}>
          <div>1</div>
        </div>
      </div>
    </div>
  )
}
