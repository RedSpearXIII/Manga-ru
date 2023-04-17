import React, { FC, ReactNode } from "react"
import { Portal } from "~shared/components"

interface GalleryLightBoxProps {
  isOpen: boolean
  onClose: () => void
  elements: ReactNode
}

const lightBoxVariants = {}

const GalleryLightBox: FC<GalleryLightBoxProps> = ({
  onClose,
  isOpen,
  elements,
}) => {
  return (
    <Portal>
      <div></div>
    </Portal>
  )
}

export default GalleryLightBox
