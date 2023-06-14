import { AnimeTrackStatuses } from "~shared/api"

export const addColorsToStatusDistribution = (
  data: {
    name: AnimeTrackStatuses
    value: number
  }[]
) => {
  if (data.length === 0)
    return [
      { value: 1, name: "Нет в списках", fill: "#8f8f8f", stroke: "#8f8f8f" },
    ]
  return data.map((data) => {
    let color = ""
    let name = ""
    if (data.name === "InPlan") {
      color = "#93c5fd"
      name = "Запланировано"
    }
    if (data.name === "Dropped") {
      color = "#f87171"
      name = "Брошено"
    }
    if (data.name === "Watched") {
      color = "#7effcb"
      name = "Просмотрено"
    }
    if (data.name === "Watching") {
      color = "#c084fc"
      name = "Смотрю"
    }
    if (data.name === "Postponed") {
      color = "#fdba74"
      name = "Отложенно"
    }
    return { value: data.value, name: name, fill: color, stroke: color }
  })
}
