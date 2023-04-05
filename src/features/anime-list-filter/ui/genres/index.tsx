import React from "react"
import { useAnimeListFilterStore } from "~features/anime-list-filter"
import { shallow } from "zustand/shallow"
import { MultiSelect } from "~shared/components"
import { useGetAnimeGenres } from "~shared/api"

export const Genres = () => {
  const { genres, setGenres } = useAnimeListFilterStore(
    (state) => state,
    shallow
  )

  const { data, isLoading } = useGetAnimeGenres()

  if (!data && isLoading) return <p>loading</p>

  if (!data && !isLoading) return null

  const values = genres.map((genre) => genre.id)

  const genreOptions = data.map(({ genre, id }) => ({
    value: id,
    label: genre,
  }))

  const onSelectGenre = (values: string[]) => {
    const genres = genreOptions
      .filter((genre) => values.includes(genre.value))
      .map((genre) => ({ id: genre.value, genre: genre.label }))

    setGenres(genres)
  }

  return (
    <div>
      <MultiSelect
        label={"Жанры"}
        placeholder={"Любой"}
        values={values}
        onValuesChange={onSelectGenre}
        options={genreOptions || []}
      />
    </div>
  )
}
