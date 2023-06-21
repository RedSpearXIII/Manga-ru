import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import styles from "./styles.module.pcss"
import { useStore } from "effector-react"
import { viewerModel } from "~entities/viewer"

import { Link, useNavigate } from "react-router-dom"
import { ToggleTheme } from "~features/toggle-theme"
import {
  BsTelegram,
  FaUser,
  RiLogoutBoxFill,
  RiSettings4Fill,
} from "react-icons/all"

type Props = {
  isOpened: boolean
}

export const Dropdown = ({ isOpened }: Props) => {
  const navigate = useNavigate()
  const { viewer } = useStore(viewerModel.$viewer)

  const logout = () => {
    viewerModel.logout()
    navigate("/login")
  }
  return (
    <AnimatePresence>
      {isOpened && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={styles.dropdown}
        >
          <div className={styles.content}>
            <Link to={`/profile/${viewer.username}`}>
              <div className={styles.item}>
                <FaUser />
                <p>Профиль</p>
              </div>
            </Link>
            <Link to={`/settings`}>
              <div className={styles.item}>
                <RiSettings4Fill />
                <p>Настройки</p>
              </div>
            </Link>
            <div onClick={logout} className={styles.item}>
              <RiLogoutBoxFill />
              <p>Выйти</p>
            </div>
            <div className={styles.item}>
              <ToggleTheme />
            </div>
          </div>

          <div className={styles.footer}>
            <Link to={"https://t.me/anifoxclub"} target={"_blank"}>
              <div className={styles.footerItem}>
                <BsTelegram />
                <p>Телеграм</p>
              </div>
            </Link>
            <Link to={"https://vk.com/anifox.club"} target={"_blank"}>
              <div className={styles.footerItem}>
                <BsTelegram />
                <p>Вконтакте</p>
              </div>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
