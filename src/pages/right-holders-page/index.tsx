import React from "react"
import styles from "./styles.module.pcss"
import { Link } from "react-router-dom"

const policyContent = [
  {
    text: "Все размещенные на ресурсе материалы находятся в свободном доступе и могут быть бесплатно скачаны из интернета. Сбор информации в сети и размещение контента в каталоге производится в автоматическом режиме.",
  },
  {
    text: "Публикация нелицензионного, похищенного контента и материалов, защищенных авторским правом, не допускается. Администрация размещает только любительские русскоязычные материалы из свободных источников при использовании автоматической системы.",
  },
  {
    text: "На ресурсе публикуются только фрагменты материалов, переведенные на русский язык, а также контент с любительским переводом для ознакомительного просмотра. Размещение оригинальных, непереведенных материалов невозможно.",
  },
  {
    text: "Администрация ресурса предлагает сотрудничество с правообладателями контента. В случае нарушения прав собственности сайт обязуется убрать неправомерно размещенный материал или предложить выгодные условия сотрудничества правообладателю.",
  },
]

const RightHoldersPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.copyrights}>
        <h1>Для правообладателей</h1>
      </div>
      <div className={styles.box}>
        <h3>
          Деятельность сайта <Link to={"/"}>anifox.club</Link> осуществляется в
          соответствии с законодательством Российской Федерации в области защиты
          информации и авторских прав на контент.
        </h3>
        <ul className={styles.list}>
          {policyContent.map(({ text }, index) => (
            <li key={index} className={styles.listItem}>
              {text}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.box}>
        <h3>
          Если вы обнаружили материал, представленный на нашем сайте, который
          нарушает ваши авторские права, или же дискредитирует Вашу компанию,
          предоставляя неверную или искаженную информацию, пожалуйста свяжитесь
          с нами по почте{" "}
          <Link target={"_blank"} to={"mailto: abuse@anifox.club"}>
            abuse@anifox.club{" "}
          </Link>
          для решения этого вопроса.
        </h3>
        <ul className={styles.list}>
          <p>
            Для этого необходимо отправить e-mail с вашего корпоративного
            почтового ящика содержащий:
          </p>
          <li className={styles.listItem}>
            контактные данные, реквизиты вашей компании;
          </li>
          <li className={styles.listItem}>
            прямую ссылку(ссылки) на материал, который вы считаете спорным;
          </li>
          <li className={styles.listItem}>
            заверенные сканированные копии документов, подтверждающих ваше
            эксклюзивное право на материал;
          </li>
          <li className={styles.listItem}>
            в случае, если вы представляете интересы другой компании – копии
            документов на посреднические услуги;
          </li>
        </ul>
      </div>

      <div className={styles.linksContainer}>
        <h3>Разрешения для встраивания видео:</h3>

        <div className={styles.links}>
          <Link
            target={"_blank"}
            to={
              "https://developers.google.com/youtube/terms/api-services-terms-of-service-ru"
            }
          >
            <div className={styles.linkItem}>
              <p>YouTube</p>
            </div>
          </Link>
          <Link target={"_blank"} to={"https://rutube.ru/info/agreement/"}>
            <div className={styles.linkItem}>RuTube</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RightHoldersPage
