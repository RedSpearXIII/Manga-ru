import React from "react"
import { Select } from "~shared/components"
import { AnimeTypeVariants } from "~shared/api"
import { useAnimeListFilterStore } from "~features/anime-list-filter"
import { shallow } from "zustand/shallow"

const options = [
  { value: "movie", label: "Фильм" },
  { value: "ona", label: "Ona" },
  { value: "ova", label: "Ova" },
  { value: "music", label: "Музыкальный" },
  { value: "special", label: "Специальный" },
  { value: "tv", label: "Телесериал" },
]

type Props = {
  inExtraFilter?: boolean
}

export const AnimeType = ({ inExtraFilter }: Props) => {
  const { type, setType } = useAnimeListFilterStore((state) => state, shallow)

  return (
    <div>
      <Select
        value={type || ""}
        onValueChange={(val) =>
          setType(val ? (val as AnimeTypeVariants) : null)
        }
        options={options}
        placeholder={"Любой"}
        label={"Тип аниме"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}