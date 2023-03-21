import React from "react"
import styles from "./styles.module.pcss"
import clockIcon from "./asstes/fast-clock.png"
import heartIcon from "./asstes/heart.webp"
import watchIcon from "./asstes/watch.png"
import conversationIcon from "./asstes/conversation.png"
import Button from "~components/button"
import { Link } from "react-router-dom"

const features = [
  {
    icon: watchIcon,
    title: "Открой мир японской культуры!",
    description: "Смотрите тайтлы и читайте мангу в отличном качетсве.",
  },
  {
    icon: conversationIcon,
    title: "Делитесь своими любимыми тайтлами",
    description:
      "Добавляйте друзей и переписывайтесь прям в приложении или на сайте.",
  },
  {
    icon: clockIcon,
    title: "Будьте в курсе последних новинок!",
    description: "Включите увомедовление и смотрите новинки одним из первых.",
  },
  {
    icon: heartIcon,
    title: "Насладитесь тайтлами!",
    description: "Бесперебойная работа сервиса, смотрите аниме 24/7",
  },
]

const SiteFeatures = () => {
  return (
    <div className={styles.features}>
      <h3>AniFox - следуй за лисичкой в мир аниме</h3>
      <p>Смотри, читай и делись своим любимым аниме или мангой!</p>

      <div className={styles.container}>
        {features.map((feature) => (
          <div className={styles.featureBlock}>
            <img
              src={feature.icon}
              alt={feature.title}
              className={styles.featureIcon}
            />
            <div>
              <h6 className={styles.featureTitle}>{feature.title}</h6>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.joinBtn}>
        <Link to={"/signup"}>
          <Button>Зарегистрироваться</Button>
        </Link>
      </div>
    </div>
  )
}

export default SiteFeatures
