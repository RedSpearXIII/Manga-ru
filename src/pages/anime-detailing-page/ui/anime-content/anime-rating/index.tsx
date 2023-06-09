import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { useGetAnimeRating, useSetAnimeRatingMutation } from "~shared/api"
import { RatingButton, MediaRating } from "~entities/rating/rating-button"
import styles from "./styles.module.pcss"
import { useQueryClient } from "@tanstack/react-query"
import { useStore } from "effector-react"
import { viewerModel } from "~entities/viewer"
import { Modal } from "~shared/components"
import { AuthForm } from "~widgets/auth-form"

type Props = {
  animeRating?: number | undefined
}

export const AnimeRating = ({ animeRating }: Props) => {
  const { animeUrl } = useParams()
  const queryClient = useQueryClient()
  const [authModalIsOpened, setAuthModalIsOpened] = useState(false)
  const [authDisplayedForm, setAuthDisplayedForm] = useState<
    "login" | "signup"
  >("login")

  const { data } = useGetAnimeRating(animeUrl!)
  const isAuth = useStore(viewerModel.$isAuth)
  const { mutate } = useSetAnimeRatingMutation()

  const onRateMedia = (rating: number) => {
    if (!isAuth) return setAuthModalIsOpened(true)

    mutate(
      { animeUrl: animeUrl!, rating },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [`getAnimeRating-${animeUrl}`],
          })
          queryClient.invalidateQueries({
            queryKey: [`getAnimeById-${animeUrl}`],
          })
        },
      }
    )
  }

  return (
    <div className={styles.animeRating}>
      <RatingButton
        onRateMedia={onRateMedia}
        ratingDistribution={data ? data : []}
      />
      {animeRating && (
        <MediaRating rating={parseFloat(animeRating.toFixed(1))} />
      )}
      {authModalIsOpened && (
        <Modal
          width={500}
          centered
          title={"Войдите в аккаунт чтобы оценить аниме"}
          isOpened={authModalIsOpened && !isAuth}
          onClose={() => setAuthModalIsOpened(false)}
        >
          <div className={styles.authFormContainer}>
            <AuthForm
              displayedForm={authDisplayedForm}
              setDisplayedForm={setAuthDisplayedForm}
            />
          </div>
        </Modal>
      )}
    </div>
  )
}
