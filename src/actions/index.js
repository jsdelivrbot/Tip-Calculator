export const CALCULATE = "CALCULATE";

let amountId = 0;

export function calculateTotal(amount) {
  return {
    type: CALCULATE,
    id: amountId++,
    payload: amount
  }
}
