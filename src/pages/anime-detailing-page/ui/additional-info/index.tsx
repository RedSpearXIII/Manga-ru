import React from "react"
import styles from "./styles.module.pcss"
import { useGetAnimeById } from "~shared/api"
import { useParams } from "react-router-dom"
import { InfoItem } from "./info-item"
import { translateAnimeType, translateMediaStatus } from "~entities/media"

export const AdditionalInfo = () => {
  const { animeId } = useParams()

  const { data, isLoading, isSuccess } = useGetAnimeById({ animeId: animeId! })

  if (isLoading) return null
  if (!isSuccess) return null

  return (
    <div className={styles.additionalInfoContainer}>
      <div className={styles.infoBox}>
        <h6>Дополнительная ифнормация</h6>
        <div className={styles.infoContainer}>
          <InfoItem
            title={"Серий"}
            value={`${data.episodesCount || "?"} / ${
              data.episodesCountAired || "?"
            }`}
          />
          <InfoItem title={"Стартовал в"} value={data.airedAt} />
          {data.year && <InfoItem title={"Год"} value={data.year} />}
          <InfoItem title={"Выпущен в"} value={data.releasedAt} />
          {data.status && (
            <InfoItem
              title={"Статус"}
              value={translateMediaStatus(data.status)}
            />
          )}
          <InfoItem title={"Тип"} value={translateAnimeType(data.type)} />
        </div>
      </div>
      <div className={styles.infoBox}>
        <h6>В списках у людей</h6>
        <div className={styles.infoContainer}>1</div>
      </div>
    </div>
  )
}
