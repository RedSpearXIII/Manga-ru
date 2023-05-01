import React from "react"
import { MultiSelect } from "~shared/components"
import { useGetAnimeYears } from "~shared/api/queries/anime/useGetAnimeYears"
import { useAnimeListFilterStore } from "~features/anime-list-filter"

interface Props {
  inExtraFilter?: boolean
}

export const Years = ({ inExtraFilter }: Props) => {
  const { years, setYears } = useAnimeListFilterStore()

  const onChange = (values: string[]) => {
    setYears(values)
  }

  const { data, isLoading } = useGetAnimeYears()

  return (
    <div>
      <MultiSelect
        searchable
        color={inExtraFilter ? "slateDark" : undefined}
        label={"Года"}
        placeholder={"Любой"}
        values={years}
        onValuesChange={onChange}
        options={data || []}
        isLoading={isLoading}
      />
    </div>
  )
}
