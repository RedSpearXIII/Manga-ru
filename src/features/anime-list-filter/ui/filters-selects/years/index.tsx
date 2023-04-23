import React, { FC } from "react"
import { MultiSelect } from "~shared/components"
import { useGetAnimeYears } from "~shared/api/queries/anime/useGetAnimeYears"
import { useAnimeListFilterStore } from "~features/anime-list-filter"

interface YearsProps {
  inExtraFilter?: boolean
}

export const Years: FC<YearsProps> = ({ inExtraFilter }) => {
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
