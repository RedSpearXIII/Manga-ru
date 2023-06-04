import React from "react"
import { Select } from "~shared/components"
import { useGetAnimeStudios } from "~shared/api"
import { animeListFilterModel } from "~features/anime-list-filter"
import { useStore } from "effector-react"

type Props = {
  inExtraFilter?: boolean
}

export const Studios = ({ inExtraFilter }: Props) => {
  const { data, isLoading } = useGetAnimeStudios()
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
        isLoading={isLoading}
        options={studioOptions}
        placeholder={"Любой"}
        label={"Студия"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
