export const FETCH_PRICES = "FETCH_PRICES";
export const PERCENTAGE = "PERCENTAGE";
export const STATE_TAX = "STATE_TAX";

let amountId = 0;

export function fetchPrices(amount) {
  return {
    type: FETCH_PRICES,
    id: amountId++,
    payload: amount
  }
}

export function tipPercentage(percent) {
  return {
    type: PERCENTAGE,
    payload: percent
  }
}

export function stateTax(tax) {
  return {
    type: STATE_TAX,
    payload: tax
  }
}
