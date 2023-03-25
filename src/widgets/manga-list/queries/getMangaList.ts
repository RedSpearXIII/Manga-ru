import { useInfiniteQuery } from "react-query"
import { publicApi } from "~shared/api"

export type MangaResponse = { id: string; title: string; image: string }

interface GetMangaParams {
  pageSize?: number
}

export const useGetMangaList = ({ pageSize }: GetMangaParams) =>
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
