import React, { useState } from "react"
import { Select } from "~shared/components"

const options = [
  {
    value: "realised",
    label: "Выпущен",
  },
  {
    value: "ongoing",
    label: "Онгоинг",
  },
]

export const Status = () => {
  const [value, setValue] = useState("")
  return (
    <div>
      <Select
        searchable={true}
        value={value}
        onValueChange={(val) => setValue(val)}
        options={options}
        label={"Статус"}
        placeholder={"Любой"}
      />
    </div>
  )
}
