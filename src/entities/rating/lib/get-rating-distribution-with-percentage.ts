export const getRatingDistributionWithPercentage = (
  distribution: { rating: number; count: number }[]
) => {
  const filledArray = []

  for (let i = 1; i <= 10; i++) {
    const rateCandidate = distribution.find(({ rating }) => rating === i)
    filledArray.unshift(rateCandidate ? rateCandidate : { rating: i, count: 0 })
  }

  const totalVotes = filledArray.reduce((total, item) => total + item.count, 0)

  return {
    ratings: filledArray.map((item) => ({
      ...item,
      percentage: (item.count / totalVotes) * 100,
    })),
    totalVotes,
  }
}
