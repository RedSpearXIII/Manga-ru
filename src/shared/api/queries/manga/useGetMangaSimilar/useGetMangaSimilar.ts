import { useQuery } from "react-query"
import { publicHttp } from "~shared/api"

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
        } = await publicHttp.get(`manga/${mangaId}/similar`)

        return data
      } catch (e) {
        console.log(e)
      }
    },
    { refetchOnWindowFocus: false }
  )
