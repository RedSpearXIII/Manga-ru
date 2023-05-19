import React, { useEffect, useState } from "react"
import { FaSearch, MdClear } from "react-icons/all"
import { Input } from "~shared/components"
import { useDebounce } from "~shared/hooks"
import { useAnimeListFilterStore } from "~features/anime-list-filter"

export const Search = () => {
  const searchQuery = useAnimeListFilterStore((state) => state.searchQuery)
  const setSearchQuery = useAnimeListFilterStore(
    (state) => state.setSearchQuery
  )

  const [searchValue, setSearchValue] = useState(searchQuery)
  const debouncedValue = useDebounce(searchValue, 300)

  useEffect(() => {
    if (searchQuery !== searchValue) setSearchValue(searchQuery)
    //control external changes
  }, [searchQuery])

  useEffect(() => {
    setSearchQuery(debouncedValue)
  }, [debouncedValue])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const clearSearch = () => {
    setSearchQuery("")
  }

  return (
    <div>
      <Input
        maxLength={40}
        label={"Поиск"}
        placeholder={"Название аниме"}
        className={"placeholder:text-current"}
        value={searchValue}
        onChange={onChange}
        icon={<FaSearch />}
        rightIcon={
          searchValue.length > 0 && (
            <MdClear cursor={"pointer"} onClick={clearSearch} />
          )
        }
      />
    </div>
  )
}
