import React from "react"
import { Select } from "~shared/components"
import { AnimeRatingMpa } from "~shared/api"
import { animeListFilterModel } from "~features/anime-list-filter"
import { useStore } from "effector-react"

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
  const ratingMpa = useStore(animeListFilterModel.$ratingMpa)

  return (
    <div>
      <Select
        color={inExtraFilter ? "slateDark" : undefined}
        value={ratingMpa || ""}
        onValueChange={(value) =>
          animeListFilterModel.setRatingMpa({
            ratingMpa: value ? (value as AnimeRatingMpa) : null,
          })
        }
        options={options}
        placeholder={"Любой"}
        label={"Возрастной рейтинг"}
      />
    </div>
  )
}
