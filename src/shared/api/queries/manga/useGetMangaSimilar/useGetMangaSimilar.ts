import { useQuery } from "@tanstack/react-query"
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
  useQuery<MangaSimilarResponse[]>({
    queryKey: [`manga-similar-${mangaId}`],
    queryFn: async () => {
      try {
        const {
          data: { data },
        } = await publicHttp.get(`manga/${mangaId}/similar`)

        return data
      } catch (e) {
        console.log(e)
      }
    },
    refetchOnWindowFocus: false,
  })
