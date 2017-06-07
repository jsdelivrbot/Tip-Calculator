import { CALCULATE } from "../actions/index";

export default function(state = [], action) {
  console.log("Action", action);
  switch (action.type) {
    case CALCULATE:
      return [ {id: action.id, amount: action.payload}, ...state ];
  }
  return state;
}
