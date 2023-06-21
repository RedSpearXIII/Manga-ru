import React from "react"
import { animeListFilterModel } from "~features/anime-list-filter"
import { MultiSelect } from "~shared/components"
import { getAnimeGenres } from "~shared/api"
import { useStore, useUnit } from "effector-react"

type Props = {
  inExtraFilter?: boolean
}

export const Genres = ({ inExtraFilter }: Props) => {
  const { pending, data } = useUnit(getAnimeGenres)
  const genres = useStore(animeListFilterModel.$genres)

  const values = genres.map((genre) => genre.id)

  const genreOptions = data
    ? data.map(({ genre, id }) => ({
        value: id,
        label: genre,
      }))
    : null

  const onSelectGenre = (values: string[]) => {
    if (genreOptions) {
      const genres = genreOptions
        .filter((genre) => values.includes(genre.value))
        .map((genre) => ({ id: genre.value, genre: genre.label }))

      animeListFilterModel.setGenres({ genres })
    }
  }

  return (
    <div>
      <MultiSelect
        searchable
        isLoading={pending}
        label={"Жанры"}
        placeholder={"Любой"}
        values={values}
        onValuesChange={onSelectGenre}
        options={genreOptions || []}
        color={inExtraFilter ? "slateDark" : undefined}
      />
    </div>
  )
}
