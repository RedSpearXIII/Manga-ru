import { useQuery } from "@tanstack/react-query"
import { Manga, publicHttp } from "~shared/api"

interface Params {
  mangaId: string
}

export const useGetMangaById = ({ mangaId }: Params) =>
  useQuery<Manga>({
    queryKey: [`manga-${mangaId}`],
    queryFn: async () => {
      try {
        const {
          data: { data },
        } = await publicHttp.get(`manga/${mangaId}`)

        return data[0]
      } catch (e) {
        console.log(e)
      }
    },
  })
