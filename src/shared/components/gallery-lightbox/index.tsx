import React, { FC } from "react"
import { Portal } from "~shared/components"
import { AnimatePresence, motion } from "framer-motion"

interface GalleryLightBoxProps {
  isOpen: boolean
  onClose: () => void
  elements: string[]
  startFrom?: number
}

const lightBoxVariants = {}

const GalleryLightBox: FC<GalleryLightBoxProps> = ({
  onClose,
  isOpen,
  elements,
  startFrom,
}) => {
  return (
    <Portal>
      <AnimatePresence>
        <motion.div></motion.div>
      </AnimatePresence>
    </Portal>
  )
}

export default GalleryLightBox
