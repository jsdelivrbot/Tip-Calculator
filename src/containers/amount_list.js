import React, { Component } from "react";
import { connect } from "react-redux";

class AmountList extends Component {

  renderAmounts(totalAmount) {
    console.log(totalAmount);
    return this.props.totalAmount.map((amount) => {
      return (
        <li key={amount.key}
          className="list-group-item">
            {amount}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-md-4 col-md-offset-1">
        Amount: {this.renderAmounts()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalAmount: state.totalAmount
  };
}

export default connect(mapStateToProps)(AmountList);
