import { useInfiniteQuery } from "react-query"
import { publicApi } from "~shared/api"

export type AnimeResponse = { id: string; title: string; image: string }

interface GetAnimeParams {
  pageSize?: number
  searchQuery?: string
}

export const useGetAnimeList = ({ pageSize, searchQuery }: GetAnimeParams) =>
  useInfiniteQuery<AnimeResponse[]>(
    ["getMangaList", searchQuery],
    async ({ pageParam = 0 }) => {
      const params = {
        pageSize: pageSize ? pageSize : 20,
        pageNum: pageParam,
        ...(searchQuery && { searchQuery }),
      }

      const {
        data: { data },
      } = await publicApi.get("anime/", {
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
