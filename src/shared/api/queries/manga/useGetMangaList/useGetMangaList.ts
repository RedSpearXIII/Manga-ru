import { useInfiniteQuery } from "react-query"
import { publicApi } from "~shared/api"

export type MangaResponse = {
  id: string
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
      } = await publicApi.get("manga/", {
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