import React, { Component } from "react";
import { connect } from "react-redux";

class AmountList extends Component {

  renderAmounts(totalAmount) {

    return this.props.totalAmount.map((eachAmount) => {
      console.log(eachAmount);
        return (
          <li key={eachAmount.id}
            className="list-group-item">
              {eachAmount.amount} +
          </li>
        );
      });
    }

  render() {
    return (
      <ul className="list-group col-md-4 col-md-offset-1">
        <h3>Individual Amounts</h3>
        {this.renderAmounts(this.props.state)}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  // console.log(state.totalAmount);
  return {
    totalAmount: state.totalAmount
  };
}

export default connect(mapStateToProps)(AmountList);
