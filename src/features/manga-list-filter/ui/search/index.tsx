import React, { useEffect, useState } from "react"
import { FaSearch } from "react-icons/all"
import { Input } from "~shared/components"
import { mangaListFilterModel } from "~features/manga-list-filter"
import { useDebounce } from "~shared/hooks"
import { useStore } from "effector-react"

export const Search = () => {
  const searchQuery = useStore(mangaListFilterModel.$searchQuery)

  const [searchValue, setSearchValue] = useState(searchQuery)
  const debouncedValue = useDebounce(searchValue, 300)

  useEffect(() => {
    if (searchQuery !== searchValue) setSearchValue(searchQuery)
    //control external changes
  }, [searchQuery])

  useEffect(() => {
    mangaListFilterModel.setSearchQuery({ queryString: debouncedValue })
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
