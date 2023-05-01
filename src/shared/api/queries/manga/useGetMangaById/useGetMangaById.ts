import { useQuery } from "react-query"
import { Manga, publicHttp } from "~shared/api"

interface Params {
  mangaId: string
}

export const useGetMangaById = ({ mangaId }: Params) =>
  useQuery<Manga>(`manga-${mangaId}`, async () => {
    try {
      const {
        data: { data },
      } = await publicHttp.get(`manga/${mangaId}`)

      return data[0]
    } catch (e) {
      console.log(e)
    }
  })
