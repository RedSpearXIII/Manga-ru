import React from "react"
import { Select } from "~shared/components"
import { AnimeMinimalAge } from "~shared/api"
import { useAnimeListFilterStore } from "~features/anime-list-filter"
import { shallow } from "zustand/shallow"

const options = [
  { value: "18", label: "18+" },
  { value: "16", label: "16+" },
  { value: "12", label: "12+" },
  { value: "6", label: "6+" },
  { value: "0", label: "0+" },
]

export const MinimalAge = () => {
  const { minimalAge, setMinimalAge } = useAnimeListFilterStore(
    (state) => state,
    shallow
  )
  return (
    <div>
      <Select
        value={minimalAge ? minimalAge.toString() : ""}
        onValueChange={(val) =>
          setMinimalAge(val ? (Number(val) as AnimeMinimalAge) : null)
        }
        options={options}
        placeholder={"Любой"}
        label={"Ограничение по возрасту"}
      />
    </div>
  )
}
