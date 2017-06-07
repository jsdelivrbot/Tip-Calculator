import React, { Component } from 'react';
import InputBar from "../containers/input_bar";
import AmountList from "../containers/amount_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <InputBar />
        <AmountList />
      </div>
    );
  }
}
