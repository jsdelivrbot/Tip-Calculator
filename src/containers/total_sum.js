import React, { Component } from "react";
import { connect } from "react-redux";

class TotalSum extends Component {
  sumAmounts(totalAmount) {
    var price = 0;
    this.props.totalAmount.map((eachAmount) => {
      price = price + Number(eachAmount.amount);
    });
    return price.toFixed(2);

  }

  render() {
    return (
      <div className="col-md-6">
        <h3>Sum: $ {this.sumAmounts(this.props.state)}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalAmount: state.totalAmount
  };
}

export default connect(mapStateToProps)(TotalSum);
