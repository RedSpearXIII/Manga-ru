import React, { useState } from "react"
import styles from "./styles.module.pcss"
import { GalleryLightBox } from "~shared/components"

export const PreviewImages = () => {
  const [lightboxIsOpened, setLightboxIsOpened] = useState(false)

  const onLightboxClose = () => {
    setLightboxIsOpened(false)
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.gallery}>
        <GalleryLightBox
          elements={<img src={"/anifox-logo.png"} />}
          isOpen={lightboxIsOpened}
          onClose={onLightboxClose}
        />
      </div>
    </div>
  )
}
