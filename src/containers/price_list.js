import React, { Component } from "react";
import { connect } from "react-redux";
import SumTotal from "./price_sum";

class PriceList extends Component {

  renderAmounts(fetchAmount) {
    return this.props.fetchPrices.map((eachAmount) => {
      return (
        <div key={eachAmount.id} className="each-amount">
            + $ {eachAmount.amount}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="col-md-4 middle-boxes">
        <h3>Price</h3>
        {this.renderAmounts()}
        <SumTotal />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchPrices: state.fetchPrices
  };
}

export default connect(mapStateToProps)(PriceList);
