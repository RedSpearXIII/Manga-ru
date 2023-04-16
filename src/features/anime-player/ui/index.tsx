import React, { FC } from "react"
import styles from "./styles.module.pcss"
import { useGetAnimeEpisodes } from "~shared/api"
import { useAnimePlayerEpisodeModel } from "../model"
import { Episodes } from "~features/anime-player/ui/episodes"

interface AnimePlayerProps {
  animeId: string
}

export const AnimePlayer: FC<AnimePlayerProps> = ({ animeId }) => {
  const { episodeLink } = useAnimePlayerEpisodeModel((state) => state.episode)

  const { data: episodes, isLoading } = useGetAnimeEpisodes({
    animeId: animeId,
    translationId: 610,
  })

  if (!episodes && isLoading) return <p>loading...</p>
  if (!episodes && !isLoading) return <p>error</p>

  return (
    <div className={styles.playerContainer}>
      <iframe className={styles.player} src={episodeLink} allowFullScreen />
      <Episodes episodes={episodes} />
    </div>
  )
}
