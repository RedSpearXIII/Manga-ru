import React, { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "~layouts/main-layout"
import { useStore } from "effector-react"
import { viewerModel } from "~entities/viewer"

const HomePage = lazy(() => import("~pages/home-page"))
const MainPage = lazy(() => import("~pages/main-page"))
const MangaPage = lazy(() => import("~pages/manga-page"))
const AnimePage = lazy(() => import("~pages/anime-page"))
const MangaDetailingPage = lazy(() => import("~pages/manga-detailing-page"))
const AnimeDetailingPage = lazy(() => import("~pages/anime-detailing-page"))
const RightHoldersPage = lazy(() => import("~pages/right-holders-page"))
const ProfilePage = lazy(() => import("~pages/profile-page"))
const WatchPage = lazy(() => import("~pages/watch-page"))
const AuthPage = lazy(() => import("~pages/auth-page"))
const SettingsPage = lazy(() => import("~pages/settings-page"))

const Routing = () => {
  const { isAuth } = useStore(viewerModel.$viewer)

  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={"home"} element={<HomePage />} />
        <Route path={"manga"}>
          <Route index element={<MangaPage />} />
          <Route path={"title/:mangaId"} element={<MangaDetailingPage />} />
        </Route>
        <Route path={"anime"}>
          <Route index element={<AnimePage />} />
          <Route path={"title/:animeUrl"} element={<AnimeDetailingPage />} />
        </Route>
        <Route path="*" element={"NOT FOUND"} />
        <Route path={"/right-holders"} element={<RightHoldersPage />} />
        {isAuth ? (
          <>
            <Route path={"/settings"} element={<SettingsPage />} />
            <Route path={"profile/:id"} element={<ProfilePage />}>
              {/*<Route index  />*/}
            </Route>
          </>
        ) : (
          <>
            <Route path={"/login"} element={<AuthPage />} />
            <Route path={"/signup"} element={<AuthPage />} />
          </>
        )}
      </Route>
      <Route path={"watch"} element={<WatchPage />} />
    </Routes>
  )
}

export default Routing
