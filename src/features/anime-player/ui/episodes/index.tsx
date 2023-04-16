import React, { FC } from "react"
import styles from "./styles.module.pcss"
import { AnimeEpisode } from "~shared/api"
import { useAnimePlayerEpisodeModel } from "~features/anime-player/model/anime-player-episode-model"
import clsx from "clsx"

interface EpisodesProps {
  episodes: AnimeEpisode[]
}

export const Episodes: FC<EpisodesProps> = ({ episodes }) => {
  const { episodeLink } = useAnimePlayerEpisodeModel((state) => state.episode)
  const setCurrentEpisode = useAnimePlayerEpisodeModel(
    (state) => state.setCurrentEpisode
  )

  return (
    <div className={styles.episodesContainer}>
      {episodes.map((episode) => (
        <div
          onClick={() =>
            setCurrentEpisode({
              episodeNumber: episode.episodeNumber,
              episodeLink: episode.link,
            })
          }
          key={episode.link}
          className={clsx(
            styles.episode,
            episodeLink === episode.link && styles.selectedEpisode
          )}
        >
          <p>{episode.episodeNumber} серия</p>
        </div>
      ))}
    </div>
  )
}
