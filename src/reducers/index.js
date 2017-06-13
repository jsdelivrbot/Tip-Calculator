import { combineReducers } from 'redux';
import PricesReducer from "./reducer_prices";
import PercentageReducer from "./reducer_percentage";
import TotalPriceReducer from "./reducer_totalPrice";

const rootReducer = combineReducers({
  fetchPrices: PricesReducer,
  percentage: PercentageReducer,
  totalPrice: TotalPriceReducer
});

export default rootReducer;
