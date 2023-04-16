import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

type Actions = {
  setCurrentEpisode: (episode: {
    episodeNumber: number
    episodeLink: string
  }) => void
}

type State = {
  episode: {
    selectedEpisodeNumber: number
    episodeLink: string
  }
}

type Store = Actions & State

const initialStore: State = {
  episode: {
    selectedEpisodeNumber: 0,
    episodeLink: "",
  },
}

export const useAnimePlayerEpisodeModel = create(
  immer<Store>((setState) => ({
    ...initialStore,
    setCurrentEpisode: (episode) => {
      setState((store) => {
        store.episode = {
          episodeLink: episode.episodeLink,
          selectedEpisodeNumber: episode.episodeNumber,
        }
      })
    },
  }))
)
