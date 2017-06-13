import React, { Component } from 'react';
import InputBar from "../containers/input_bar";
import PriceList from "../containers/price_list";
import TotalPrice from "../containers/total_price";
import StateTax from "../containers/state_tax";
import TipPercent from "../containers/tip_percent";

export default class App extends Component {
  render() {
    return (
      <div>
        <InputBar />
        <PriceList />
        <TotalPrice />
        <TipPercent />
        <StateTax />
      </div>
    );
  }
}
