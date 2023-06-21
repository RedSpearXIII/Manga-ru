import React from "react"
import { Label, Pie, PieChart, ResponsiveContainer } from "recharts"
import styles from "./styles.module.pcss"
import { CustomLegend } from "./CustomLegend"
import { addColorsToStatusDistribution } from "../../lib"
import { AnimeTrackStatuses } from "~shared/api"

type Props = {
  distributionData: {
    name: AnimeTrackStatuses
    value: number
  }[]
}

export const StatusDistributionChart = ({ distributionData }: Props) => {
  const distribution = addColorsToStatusDistribution(distributionData)
  const totalCount = distributionData.reduce(
    (accumulator, current) => accumulator + current.value,
    0
  )
  return (
    <div className={styles.chartContainer}>
      <ResponsiveContainer height={150} width={"100%"}>
        <PieChart>
          <Pie innerRadius={"50%"} dataKey={"value"} data={distribution}>
            {totalCount > 0 && (
              <Label value={totalCount} position={"center"} fill={"#FFF"} />
            )}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <CustomLegend data={distribution} />
    </div>
  )
}
