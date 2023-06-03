import React from "react"
import { Select } from "~shared/components"
import { AnimeMinimalAge } from "~shared/api"
import { animeListFilterModel } from "~features/anime-list-filter"
import { useStore } from "effector-react"

const options = [
  { value: "18", label: "18+" },
  { value: "16", label: "16+" },
  { value: "12", label: "12+" },
  { value: "6", label: "6+" },
  { value: "0", label: "0+" },
]

type Props = {
  inExtraFilter?: boolean
}

export const MinimalAge = ({ inExtraFilter }: Props) => {
  const minimalAge = useStore(animeListFilterModel.$minimalAge)

  return (
    <div>
      <Select
        value={minimalAge ? minimalAge.toString() : ""}
        onValueChange={(value) =>
          animeListFilterModel.setMinimalAge({
            minimalAge: value ? (Number(value) as AnimeMinimalAge) : null,
          })
        }
        options={options}
        placeholder={"Любой"}
        label={"Ограничение по возрасту"}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
