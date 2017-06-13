import React, { Component } from 'react';
import InputBar from "../containers/input_bar";
import PriceList from "../containers/price_list";
import SumTotal from "../containers/price_sum";
import StateTax from "../containers/state_tax";
import TipPercent from "../containers/tip_percent";
import FinalAmount from "../containers/final_amount";

export default class App extends Component {
  render() {
    return (
      <div>
        <InputBar />
        <PriceList />

        <StateTax />
        <TipPercent />
        <FinalAmount />
      </div>
    );
  }
}
