import { useInfiniteQuery } from "react-query"
import { publicApi } from "~api/http"

export type MangaResponse = { id: string; title: string; image: string }

interface getMangaParams {
  pageSize?: number
}

export const useGetMangaList = ({ pageSize }: getMangaParams) =>
  useInfiniteQuery<MangaResponse[]>(
    "getAnimeList",
    async ({ pageParam = 0 }) => {
      const {
        data: { data },
      } = await publicApi.get("manga/", {
        params: {
          pageSize: pageSize ? pageSize : 20,
          pageNum: pageParam,
        },
      })
      return data
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = allPages.length
        return lastPage.length !== 0 ? nextPage + 1 : undefined
      },
      refetchOnWindowFocus: false,
    }
  )
