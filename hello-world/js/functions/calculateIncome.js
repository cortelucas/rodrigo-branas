import { roundValue } from "./roundValue.js"

export function calculateIncome(value) {
  const income = roundValue(value * 0.005)

  return income
}