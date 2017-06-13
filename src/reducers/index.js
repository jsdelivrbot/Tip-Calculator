import { combineReducers } from 'redux';
import PricesReducer from "./reducer_prices";
import TipReducer from "./reducer_tip";
import StateReducer from "./reducer_tax";

const rootReducer = combineReducers({
  fetchPrices: PricesReducer,
  tipPercentage: TipReducer,
  stateTax: StateReducer
});

export default rootReducer;
