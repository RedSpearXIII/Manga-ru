import { useQuery } from "react-query"
import { MangaModel, publicApi } from "~shared/api"

interface Params {
  mangaId: string
}

export const useGetMangaById = ({ mangaId }: Params) =>
  useQuery<MangaModel>(`manga-${mangaId}`, async () => {
    try {
      const {
        data: { data },
      } = await publicApi.get(`manga/${mangaId}`)

      return data[0]
    } catch (e) {
      console.log(e)
    }
  })
