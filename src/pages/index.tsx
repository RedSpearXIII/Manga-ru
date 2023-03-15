import React from "react"
import { Route, Routes } from "react-router-dom"
import { MainLayout } from "~layouts/main-layout"
import MainPage from "~pages/main-page/ui"

const Routing = () => {
  return (
    <Routes>
      <Route path={"/"} element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="*" element={"NOT FOUND"} />
      </Route>
    </Routes>
  )
}

export default Routing
