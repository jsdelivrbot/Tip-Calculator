import { PERCENTAGE } from "../actions/index";

export default function(state = {}, action) {
  switch (action.type) {
    case PERCENTAGE:
      return {
        perc: action.payload
      };
  }
  return state;
}
