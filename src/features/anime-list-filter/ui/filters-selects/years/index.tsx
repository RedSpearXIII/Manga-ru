import React from "react"
import { MultiSelect } from "~shared/components"
import { getAnimeYears } from "~shared/api"
import { animeListFilterModel } from "~features/anime-list-filter"
import { useStore, useUnit } from "effector-react"

interface Props {
  inExtraFilter?: boolean
}

export const Years = ({ inExtraFilter }: Props) => {
  const years = useStore(animeListFilterModel.$years)

  const onChange = (values: string[]) => {
    animeListFilterModel.setYears({ years: values })
  }

  /*Вызов запроса происходит в сторе чтобы загрузить данные сразу*/
  const { data, pending } = useUnit(getAnimeYears)

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
        isLoading={pending}
      />
    </div>
  )
}
