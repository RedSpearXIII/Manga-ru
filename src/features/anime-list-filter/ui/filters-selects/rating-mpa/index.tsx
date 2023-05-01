import React from "react"
import { Select } from "~shared/components"
import { AnimeRatingMpa } from "~shared/api"
import { useAnimeListFilterStore } from "~features/anime-list-filter"
import { shallow } from "zustand/shallow"

const options = [
  { value: "PG", label: "PG" },
  { value: "PG-13", label: "PG-13" },
  { value: "R", label: "R" },
  { value: "R+", label: "R+" },
  { value: "G", label: "G" },
]

type Props = {
  inExtraFilter?: boolean
}

export const RatingMpa = ({ inExtraFilter }: Props) => {
  const { ratingMpa, setRatingMpa } = useAnimeListFilterStore(
    (state) => state,
    shallow
  )

  return (
    <div>
      <Select
        color={inExtraFilter ? "slateDark" : undefined}
        value={ratingMpa || ""}
        onValueChange={(val) =>
          setRatingMpa(val ? (val as AnimeRatingMpa) : null)
        }
        options={options}
        placeholder={"Любой"}
        label={"Возрастной рейтинг"}
      />
    </div>
  )
}
