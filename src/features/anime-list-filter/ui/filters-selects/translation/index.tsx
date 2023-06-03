import React from "react"
import { animeListFilterModel } from "~features/anime-list-filter"
import { MultiSelect } from "~shared/components"
import { useGetAnimeTranslation } from "~shared/api"
import { useStore } from "effector-react"

type Props = {
  inExtraFilter?: boolean
}

export const Translations = ({ inExtraFilter }: Props) => {
  const { data, isLoading } = useGetAnimeTranslation()

  const translations = useStore(animeListFilterModel.$translations)

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

      animeListFilterModel.setTranslations({ translations: payload })
    }
  }

  return (
    <div>
      <MultiSelect
        searchable
        color={inExtraFilter ? "slateDark" : undefined}
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
