import React, { Component } from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";

class SumTotal extends Component {

  addPrices(fetchPrices) {
    var price = 0;
    this.props.fetchPrices.map((eachAmount) => {
      price = price + Number(eachAmount.amount);
    });
    const priceTotal = price.toFixed(2);
    return priceTotal;
  }

  render() {
    return (
      <div className="sum-amount">
        <h4> = {this.addPrices()} </h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchPrices: state.fetchPrices
  };
}

export default connect(mapStateToProps)(SumTotal);
