import { FETCH_PRICES } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRICES:
      return [ {id: action.id, amount: action.payload}, ...state ];
  }
  return state;
}
