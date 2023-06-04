import React from "react"
import { BiSad, FaRegSmileBeam, RiEmotionNormalLine } from "react-icons/all"

type Props = {
  rating: number
}

export const RatingIcon = ({ rating }: Props) => {
  const Icon =
    rating <= 3 ? BiSad : rating <= 7 ? RiEmotionNormalLine : FaRegSmileBeam

  return <div>{<Icon />}</div>
}
