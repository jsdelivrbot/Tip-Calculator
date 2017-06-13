import React, { Component } from "react";
import { connect } from "react-redux";
import { tipPercentage } from "../actions/index";
import { stateTax } from "../actions/index";
import { fetchPrices } from "../actions/index";


class FinalAmount extends Component {

  addPrices(fetchPrices, stateTax, tipPercentage) {
    const tax = this.props.stateTax.tax;
    const tip = this.props.tipPercentage.percent;

    //TOTAL PRICE
    var price = 0;
    this.props.fetchPrices.map((eachAmount) => {
      price = price + Number(eachAmount.amount);
    });
    const priceTotal = Number(price.toFixed(2));

    if (typeof tax == "undefined" || typeof tip == "undefined") {
      return "Select Tax and Tip Amount";
    }



    console.log(this.props, priceTotal, tax, tip);

    return (priceTotal + ((priceTotal * tax)/100) + ((priceTotal * tip)/100)).toFixed(2);

  }

  render() {
    return (
      <div className="row">
        <h3>TOTAL PRICE: $ {this.addPrices(stateTax, tipPercentage)}</h3>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    fetchPrices: state.fetchPrices,
    tipPercentage: state.tipPercentage,
    stateTax: state.stateTax
  };
}

export default connect(mapStateToProps)(FinalAmount);
