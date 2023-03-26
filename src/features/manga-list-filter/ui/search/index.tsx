import React, { useEffect, useState } from "react"
import { FaSearch } from "react-icons/all"
import { Input } from "~shared/components"
import { useMangaListFilterStore } from "~features/manga-list-filter"
import useDebounce from "~shared/hooks/useDebounce"

export const Search = () => {
  const searchQuery = useMangaListFilterStore((state) => state.searchQuery)
  const setSearchQuery = useMangaListFilterStore(
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

  return (
    <div>
      <Input
        maxLength={40}
        label={"Поиск"}
        placeholder={"Название манги"}
        value={searchValue}
        onChange={onChange}
        icon={<FaSearch />}
      />
    </div>
  )
}
