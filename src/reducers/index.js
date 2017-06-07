import { combineReducers } from 'redux';
import CalculateReducer from "./reducer_calculate";

const rootReducer = combineReducers({
  totalAmount: CalculateReducer
});

export default rootReducer;
