import React from "react"
import { Pie, PieChart, ResponsiveContainer } from "recharts"
import styles from "./styles.module.pcss"
import { useScreenSize } from "~shared/hooks"
import { Breakpoints } from "~shared/types"
import { CustomLegend } from "./CustomLegend"

const data = [
  {
    name: "Просмотрено",
    value: 826,
    fill: "#7effcb",
    stroke: "#7effcb",
  },
  {
    name: "Смотрю",
    value: 2668,
    fill: "#c084fc",
    stroke: "#c084fc",
  },
  {
    name: "Запланировано",
    value: 3359,
    fill: "#93c5fd",
    stroke: "#93c5fd",
  },
  {
    name: "Отложенно",
    value: 822,
    fill: "#fdba74",
    stroke: "#fdba74",
  },
  {
    name: "Брошено",
    value: 320,
    fill: "#f87171",
    stroke: "#f87171",
  },
]

export const StatusDistribution = () => {
  const { screenWidth } = useScreenSize()
  console.log(screenWidth <= Breakpoints.md)
  return (
    <div className={"my-5"}>
      <h3>В списках у людей</h3>
      <div className={styles.chartContainer}>
        <ResponsiveContainer
          height={150}
          width={screenWidth <= Breakpoints.md ? "100%" : 150}
        >
          <PieChart>
            <Pie innerRadius={"50%"} dataKey={"value"} data={data} />
          </PieChart>
        </ResponsiveContainer>
        <CustomLegend data={data} />
      </div>
    </div>
  )
}
