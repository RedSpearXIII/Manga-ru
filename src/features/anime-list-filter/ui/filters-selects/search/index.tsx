import React, { useEffect, useState } from "react"
import { FaSearch, MdClear } from "react-icons/all"
import { Input } from "~shared/components"
import { useDebounce } from "~shared/hooks"
import { useStore } from "effector-react"
import { animeListFilterModel } from "~features/anime-list-filter"

export const Search = () => {
  const searchQuery = useStore(animeListFilterModel.$searchQuery)

  const [searchValue, setSearchValue] = useState(searchQuery)
  const debouncedValue = useDebounce(searchValue, 300)

  useEffect(() => {
    if (searchQuery !== searchValue) setSearchValue(searchQuery)
    //control external changes
  }, [searchQuery])

  useEffect(() => {
    animeListFilterModel.setSearchQuery({ queryString: debouncedValue })
  }, [debouncedValue])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const clearSearch = () => {
    animeListFilterModel.setSearchQuery({ queryString: "" })
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
