import React from "react"
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

export const Status = () => {
  const { status, setStatus } = useAnimeListFilterStore(
    (state) => state,
    shallow
  )
  return (
    <div>
      <Select
        searchable={true}
        value={status || ""}
        onValueChange={(val) => setStatus(val ? (val as AnimeStatuses) : null)}
        options={options}
        label={"Статус"}
        placeholder={"Любой"}
      />
    </div>
  )
}