import { STATE_TAX } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case STATE_TAX:
      return {
        tax: action.payload
      };
  }
  return state;
}
