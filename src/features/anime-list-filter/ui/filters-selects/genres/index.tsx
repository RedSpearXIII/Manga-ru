import React, { FC } from "react"
import { useAnimeListFilterStore } from "~features/anime-list-filter"
import { shallow } from "zustand/shallow"
import { MultiSelect } from "~shared/components"
import { useGetAnimeGenres } from "~shared/api"

interface GenresProps {
  inExtraFilter?: boolean
}

export const Genres: FC<GenresProps> = ({ inExtraFilter }) => {
  const { genres, setGenres } = useAnimeListFilterStore(
    (state) => state,
    shallow
  )

  const { data, isLoading } = useGetAnimeGenres()

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

      setGenres(genres)
    }
  }

  return (
    <div>
      <MultiSelect
        searchable
        isLoading={isLoading}
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
