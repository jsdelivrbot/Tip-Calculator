import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { totalPrice } from "../actions/index";

class TotalPrice extends Component {

  addPrices(fetchPrices) {
    var price = 0;
    this.props.fetchPrices.map((eachAmount) => {
      price = price + Number(eachAmount.amount);
    });
    const priceTotal = price.toFixed(2);

    // this.props.totalPrice(priceTotal);

    return priceTotal;
  }

  render() {
    return (
      <div className="row">
        <h3>Total Price: $ {this.addPrices(this.props.state)}</h3>
      </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ totalPrice }, dispatch);
// }

function mapStateToProps(state) {
  return {
    fetchPrices: state.fetchPrices
  };
}

export default connect(mapStateToProps)(TotalPrice);
