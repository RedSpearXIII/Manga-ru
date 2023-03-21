import React, { FC } from "react"
import styles from "./styles.module.pcss"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

interface MediaCardProps {
  manga: { id: string; title: string; image: string }
}

export const MediaCard: FC<MediaCardProps> = ({ manga }) => {
  return (
    <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }}>
      <div className={styles.card}>
        <Link to={`/manga/title/${manga.id}`}>
          <img
            className={styles.cardImage}
            alt={manga.title}
            src={manga.image}
          />
          <p className={styles.cardTitle}>{manga.title}</p>
        </Link>
      </div>
    </motion.div>
  )
}
