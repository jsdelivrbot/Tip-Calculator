import { TOTAL_PRICE } from "../actions/index";

export default function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case TOTAL_PRICE:
      return {
        priceTotal: action.payload
      };
  }
  return state;
}
