export const FETCH_PRICES = "FETCH_PRICES";
export const PERCENTAGE = "PERCENTAGE";
export const TOTAL_PRICE = "TOTAL_PRICE";

let amountId = 0;

export function fetchPrices(amount) {
  return {
    type: FETCH_PRICES,
    id: amountId++,
    payload: amount
  }
}

export function percentage(percent) {
  return {
    type: PERCENTAGE,
    payload: percent
  }
}

export function totalPrice(price) {
  return {
    type: TOTAL_PRICE,
    payload: price
  }
}
