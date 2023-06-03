import React from "react"
import { Select } from "~shared/components"
import { AnimeTypeVariants } from "~shared/api"
import { animeListFilterModel } from "~features/anime-list-filter"
import { useStore } from "effector-react"

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
  const type = useStore(animeListFilterModel.$type)

  return (
    <div>
      <Select
        value={type || ""}
        onValueChange={(value) =>
          animeListFilterModel.setType({
            type: value ? (value as AnimeTypeVariants) : null,
          })
        }
        options={options}
        placeholder={"Любой"}
        label={"Тип аниме"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
