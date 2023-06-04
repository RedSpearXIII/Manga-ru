import React from "react"
import styles from "./styles.module.pcss"
import { useStore } from "effector-react"
import { viewerModel } from "~entities/viewer"
import { RiLogoutBoxRFill } from "react-icons/all"

export const ProfileSection = () => {
  const { viewer } = useStore(viewerModel.$viewer)

  return (
    <div className={styles.profileSection}>
      <div className={styles.left}>
        <p>@{viewer.username}</p>
      </div>
      <div className={styles.right}>
        <span className={styles.separator} />
        <div onClick={() => viewerModel.logout()} className={styles.logoutBtn}>
          <RiLogoutBoxRFill />
          <p>Выйти</p>
        </div>
      </div>
    </div>
  )
}
