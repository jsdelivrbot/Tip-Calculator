import React, { Component } from "react";
import { connect } from "react-redux";

class AmountList extends Component {

  renderAmounts(totalAmount) {
    return this.props.totalAmount.map((eachAmount) => {
        return (
          <div key={eachAmount.id}>
              $ {eachAmount.amount} +
          </div>
        );
      });
    }

  render() {
    return (
      <div className="col-md-6">
        <h3>Price</h3>
        {this.renderAmounts(this.props.state)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalAmount: state.totalAmount
  };
}

export default connect(mapStateToProps)(AmountList);
