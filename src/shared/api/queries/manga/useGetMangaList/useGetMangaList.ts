import { useInfiniteQuery } from "react-query"
import { publicHttp } from "~shared/api"

export type MangaResponse = {
  url: string
  title: string
  image: string
}

interface GetMangaParams {
  pageSize?: number
  searchQuery?: string
}

export const useGetMangaList = ({ pageSize, searchQuery }: GetMangaParams) =>
  useInfiniteQuery<MangaResponse[]>(
    ["getAnimeList", searchQuery],
    async ({ pageParam = 0 }) => {
      const params = {
        pageSize: pageSize ? pageSize : 20,
        pageNum: pageParam,
        ...(searchQuery && { searchQuery }),
      }

      const {
        data: { data },
      } = await publicHttp.get("manga/", {
        params,
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
