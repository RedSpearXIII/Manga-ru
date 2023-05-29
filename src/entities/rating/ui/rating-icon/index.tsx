import React from "react"
import {
  AiFillHeart,
  BiSad,
  FaRegSmileBeam,
  RiEmotionNormalLine,
} from "react-icons/all"

type Props = {
  rating: number
}

export const RatingIcon = ({ rating }: Props) => {
  const Icon =
    rating <= 3
      ? BiSad
      : rating <= 6
      ? RiEmotionNormalLine
      : rating <= 8
      ? AiFillHeart
      : FaRegSmileBeam

  return <div>{<Icon />}</div>
}
