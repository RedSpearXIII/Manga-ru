import React, { FC } from "react"
import { Select } from "~shared/components"
import { useAnimeListFilterStore } from "~features/anime-list-filter"
import { shallow } from "zustand/shallow"
import { AnimeStatuses } from "~shared/api"

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

interface StatusProps {
  inExtraFilter?: boolean
}

export const Status: FC<StatusProps> = ({ inExtraFilter }) => {
  const { status, setStatus } = useAnimeListFilterStore(
    (state) => state,
    shallow
  )
  return (
    <div>
      <Select
        value={status || ""}
        onValueChange={(val) => setStatus(val ? (val as AnimeStatuses) : null)}
        options={options}
        label={"Статус"}
        placeholder={"Любой"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
