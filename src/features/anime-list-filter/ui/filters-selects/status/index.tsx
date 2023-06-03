import React from "react"
import { Select } from "~shared/components"
import { animeListFilterModel } from "~features/anime-list-filter"
import { AnimeStatuses } from "~shared/api"
import { useStore } from "effector-react"

const options = [
  {
    value: "released",
    label: "Выпущен",
  },
  {
    value: "ongoing",
    label: "Онгоинг",
  },
]

type Props = {
  inExtraFilter?: boolean
}

export const Status = ({ inExtraFilter }: Props) => {
  const status = useStore(animeListFilterModel.$status)
  return (
    <div>
      <Select
        value={status || ""}
        onValueChange={(value) =>
          animeListFilterModel.setStatus({
            status: value ? (value as AnimeStatuses) : null,
          })
        }
        options={options}
        label={"Статус"}
        placeholder={"Любой"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
