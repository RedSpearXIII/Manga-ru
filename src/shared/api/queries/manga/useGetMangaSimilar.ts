import { useQuery } from "react-query"
import { publicApi } from "~shared/api"

interface Params {
  mangaId: string
}

type MangaSimilarResponse = {
  id: string
  title: string
  image: string
}

export const useGetMangaSimilar = ({ mangaId }: Params) =>
  useQuery<MangaSimilarResponse[]>(
    `manga-similar-${mangaId}`,
    async () => {
      try {
        const {
          data: { data },
        } = await publicApi.get(`manga/${mangaId}/similar`)

        return data
      } catch (e) {
        console.log(e)
      }
    },
    { refetchOnWindowFocus: false }
  )
