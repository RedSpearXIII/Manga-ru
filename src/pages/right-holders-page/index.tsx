import React from "react"
import styles from "./styles.module.pcss"
import { MdScreenshotMonitor } from "react-icons/all"

const policyContent = [
  {
    icon: MdScreenshotMonitor,
    text: "Деятельность сайта anifox.club осуществляется в соответствии с законодательством Российской Федерации в области защиты информации и авторских прав на контент.",
  },
]

const RightHoldersPage = () => {
  return (
    <div className={styles.content}>
      <div className={styles.copyrights}>
        <h4>Для правооблодателей</h4>
      </div>
      <div className={styles.forBoxes}>
        {policyContent.map(({ text, icon: Icon }) => (
          <div className={styles.box}>
            <div>
              <Icon size={34} />
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RightHoldersPage
