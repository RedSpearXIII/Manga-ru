import React from "react"
import { Select } from "~shared/components"
import { getAnimeStudios } from "~shared/api"
import { animeListFilterModel } from "~features/anime-list-filter"
import { useStore } from "effector-react"
import { useUnit } from "effector-react/effector-react.umd"

type Props = {
  inExtraFilter?: boolean
}

export const Studios = ({ inExtraFilter }: Props) => {
  const { data, pending } = useUnit(getAnimeStudios)
  const studio = useStore(animeListFilterModel.$studio)

  const studioOptions = data
    ? data.map(({ studio }) => ({
        value: studio,
        label: studio,
      }))
    : []

  return (
    <div>
      <Select
        value={studio || ""}
        onValueChange={(value) =>
          animeListFilterModel.setStudio({
            studio: value ? value : null,
          })
        }
        searchable
        isLoading={pending}
        options={studioOptions}
        placeholder={"Любой"}
        label={"Студия"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
