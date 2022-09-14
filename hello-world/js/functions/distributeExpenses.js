import { roundValue } from "./roundValue.js"

export function distributeExpenses(releases, total) {
  const expenseDistribution = []

  releases.forEach(({ category, type, value }) => {
    if (type === "despesa") {
      const percentageOfExpenses = roundValue((value / total) * 100)
      expenseDistribution.push({
        category,
        percentageOfExpenses
      })
    }
  })

  return expenseDistribution
}
