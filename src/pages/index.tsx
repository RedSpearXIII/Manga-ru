import React, { lazy } from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "~layouts/main-layout"

const HomePage = lazy(() => import("~pages/home-page"))
const MainPage = lazy(() => import("~pages/main-page"))
const LoginPage = lazy(() => import("~pages/login-page"))
const SignupPage = lazy(() => import("~pages/signup-page"))
const MangaPage = lazy(() => import("~pages/manga-page"))
const MangaDetailingPage = lazy(() => import("~pages/manga-detailing-page"))

const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={"home"} element={<HomePage />} />
        <Route path={"manga"}>
          <Route index element={<MangaPage />} />
          <Route path={"title/:mangaId"} element={<MangaDetailingPage />} />
        </Route>
        <Route path="*" element={"NOT FOUND"} />
      </Route>
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/signup"} element={<SignupPage />} />
    </Routes>
  )
}

export default Routing
