import React from "react"
import { Select } from "~shared/components"
import { animeListFilterModel } from "~features/anime-list-filter"
import { AnimeSeasons } from "~shared/api"
import { useStore } from "effector-react"

const options = [
  { value: "Fall", label: "Осень" },
  { value: "Spring", label: "Весна" },
  { value: "Winter", label: "Зима" },
  { value: "Summer", label: "Лето" },
]

type Props = {
  inExtraFilter?: boolean
}

export const Season = ({ inExtraFilter }: Props) => {
  const season = useStore(animeListFilterModel.$season)

  return (
    <div>
      <Select
        value={season || ""}
        onValueChange={(value) =>
          animeListFilterModel.setSeason({
            season: value ? (value as AnimeSeasons) : null,
          })
        }
        options={options}
        placeholder={"Любой"}
        label={"Сезон"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
