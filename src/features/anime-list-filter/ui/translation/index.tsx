import React from "react"
import { useAnimeListFilterStore } from "~features/anime-list-filter"
import { shallow } from "zustand/shallow"
import { MultiSelect } from "~shared/components"
import { useGetAnimeTranslation } from "~shared/api"

export const Translations = () => {
  const { data, isLoading } = useGetAnimeTranslation()

  const { translations, setTranslations } = useAnimeListFilterStore(
    (state) => state,
    shallow
  )

  const values = translations.map((translation) => translation.id.toString())

  const translationsOptions = data
    ? data.map(({ title, id }) => ({
        value: id.toString(),
        label: title,
      }))
    : null

  const onSelectTranslation = (values: string[]) => {
    if (data) {
      const payload = data
        .filter((translation) => values.includes(translation.id.toString()))
        .map((translation) => ({
          id: translation.id,
          title: translation.title,
          voice: translation.voice,
        }))

      console.log(payload)

      setTranslations(payload)
    }
  }

  return (
    <div>
      <MultiSelect
        searchable
        color={"slateDark"}
        isLoading={isLoading}
        label={"Озвучки"}
        placeholder={"Любые"}
        values={values}
        onValuesChange={onSelectTranslation}
        options={translationsOptions || []}
      />
    </div>
  )
}
