import { calculateIncome } from "./calculateIncome.js"
import { calculateInterest } from "./calculateInterest.js"
import { distributeExpenses } from "./distributeExpenses.js"
import { roundValue } from "./roundValue.js"

export function calculateBalance(mount, previousBalance, releases) {
  console.log(mount)
  let totalMount = {
    balance: 0,
    previousBalance,
    interest: 0,
    income: 0,
    revenue: 0,
    expense: 0,
    expenseDistribution: []
  }
  totalMount.balance = previousBalance

  releases.forEach(({ type, value }) => {
    if (type === 'receita') {
      totalMount.balance += value
      totalMount.revenue += value
    }
    if (type === 'despesa') {
      totalMount.balance -= value
      totalMount.expense += value
    }
  })

  totalMount.expenseDistribution = distributeExpenses(releases, totalMount.expense)

  if (totalMount.balance < 0) {
    totalMount.interest = calculateInterest(totalMount.balance)
    totalMount.balance = roundValue(totalMount.balance + interest)
  } else {
    totalMount.income = calculateIncome(totalMount.balance)
    totalMount.balance = roundValue(totalMount.balance + totalMount.income)
  }

  return totalMount
}