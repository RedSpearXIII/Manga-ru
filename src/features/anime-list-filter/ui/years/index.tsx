import React from "react"
import { MultiSelect } from "~shared/components"
import { useGetAnimeYears } from "~shared/api/queries/anime/useGetAnimeYears"
import { useAnimeListFilterStore } from "~features/anime-list-filter"

export const Years = () => {
  const { years, setYears } = useAnimeListFilterStore()

  const onChange = (values: string[]) => {
    setYears(values)
  }

  const { data, isLoading } = useGetAnimeYears()

  if (!data && !isLoading) return <p>error</p>
  if (!data && isLoading) return <p>loading</p>

  return (
    <div>
      <MultiSelect
        color={"slateDark"}
        label={"Года"}
        placeholder={"Любой"}
        values={years}
        onValuesChange={onChange}
        options={data}
      />
    </div>
  )
}
