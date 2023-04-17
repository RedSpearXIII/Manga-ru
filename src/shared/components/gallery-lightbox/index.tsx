import React, { FC, ReactNode } from "react"
import { Portal } from "~shared/components"

interface GalleryLightBoxProps {
  isOpen: boolean
  onClose: () => void
  imgElements: ReactNode
}

const lightBoxVariants = {}

const GalleryLightBox: FC = ({}) => {
  return (
    <Portal>
      <div></div>
    </Portal>
  )
}

export default GalleryLightBox
