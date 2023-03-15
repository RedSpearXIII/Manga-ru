import React from "react"
import Button from "~components/button"
import Input from "~components/input"
import { TbBrandMailgun } from "react-icons/all"
const MainPage = () => {
  return (
    <div>
      <Button>Смотреть</Button>
      <Input
        placeholder={"email"}
        label={"Введи email"}
        icon={<TbBrandMailgun />}
      />
    </div>
  )
}

export default MainPage
