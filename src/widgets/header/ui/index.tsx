import React, { useEffect, useState } from "react"
import styles from "./styles.module.pcss"
import { UserPanel } from "~widgets/user-panel"
import { NoticePanel } from "~widgets/notice-panel"
import clsx from "clsx"
import { Button, SiteLogo } from "~shared/components"
import { AiOutlineUserAdd, BiLogIn, FaBookOpen, FaPlay } from "react-icons/all"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import CatalogSearch from "~features/catalog-search/ui"
import { useStore } from "effector-react"
import { viewerModel } from "~entities/viewer"

const links = [
  { icon: <FaPlay />, to: "/anime", title: "Аниме" },
  { icon: <FaBookOpen />, to: "/manga", title: "Манга" },
]

export const Header = () => {
  const isAuth = useStore(viewerModel.$isAuth)
  const [isHidden, setIsHidden] = useState(false)

  const navLinks = links.map(({ to, title, icon: Icon }) => (
    <Link className={styles.link} key={to} to={to}>
      {Icon}
      <p>{title}</p>
    </Link>
  ))

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      if (scrollTop > lastScrollTop && !isHidden) {
        setIsHidden(true)
      } else {
        setIsHidden(false)
      }

      // Сохраняем текущее значение прокрутки
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
    }

    let lastScrollTop = 0

    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <div className={clsx(styles.wrapper, isHidden && styles.hidden)}>
      <header className={styles.header}>
        <SiteLogo />

        <motion.nav
          className={styles.navLinks}
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
        >
          {navLinks}
        </motion.nav>

        <div className={styles.rightBlock}>
          <div className={styles.rightItem}>
            <CatalogSearch />
          </div>
          {isAuth && (
            <>
              <div className={styles.rightItem}>
                <NoticePanel />
              </div>
              <div className={styles.rightItem}>
                <UserPanel />
              </div>
            </>
          )}
          {!isAuth && (
            <>
              <div className={styles.rightItem}>
                <Link to={"/login"}>
                  <Button rightIcon={<BiLogIn />} color={"blue"}>
                    Войти
                  </Button>
                </Link>
              </div>
              <div className={styles.rightItem}>
                <Link to={"/signup"}>
                  <Button rightIcon={<AiOutlineUserAdd />}>
                    Зарегистрироваться
                  </Button>
                </Link>
              </div>
            </>
          )}
        </div>
      </header>
    </div>
  )
}
