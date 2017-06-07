import React, { Component } from 'react';
import InputBar from "../containers/input_bar";
import AmountList from "../containers/amount_list";
import TotalSum from "../containers/total_sum";

export default class App extends Component {
  render() {
    return (
      <div>
        <InputBar />
        <AmountList />
        <TotalSum />
      </div>
    );
  }
}
