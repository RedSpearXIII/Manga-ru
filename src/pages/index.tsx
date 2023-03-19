import React from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "~layouts/main-layout"
import MainPage from "~pages/main-page/ui"
import LoginPage from "~pages/login-page/ui"
import SignupPage from "~pages/signup-page/ui"
import HomePage from "~pages/home-page/ui"

const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path={"/home"} element={<HomePage />} />
        <Route path="*" element={"NOT FOUND"} />
      </Route>
      <Route path={"/login"} element={<LoginPage />} />
      <Route path={"/signup"} element={<SignupPage />} />
    </Routes>
  )
}

export default Routing
