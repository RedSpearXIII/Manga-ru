import React from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "~layouts/main-layout"
import { HomePage } from "~pages/home-page"
import { MainPage } from "~pages/main-page"
import { LoginPage } from "~pages/login-page"
import { SignupPage } from "~pages/signup-page"
import { MangaPage } from "~pages/manga-page"

const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={"home"} element={<HomePage />} />
        <Route path={"manga"} element={<MangaPage />} />
        <Route path="*" element={"NOT FOUND"} />
      </Route>
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/signup"} element={<SignupPage />} />
    </Routes>
  )
}

export default Routing
