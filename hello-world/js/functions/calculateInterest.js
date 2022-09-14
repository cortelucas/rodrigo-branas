import { roundValue } from "./roundValue.js"

export function calculateInterest(value) {
  const interest = roundValue(value * 0.1)

  return interest
}