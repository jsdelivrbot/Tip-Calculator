import React, { Component } from "react";
import { connect } from "react-redux";

class StateTax extends Component {

  calculateTax(total) {
    return (total * 0.0875).toFixed(2);
  }

  render() {
    return (
      <div className="col-md-4">
        <h3>NY State: $ {this.calculateTax(this.props.total)}</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    fetchPrices: state.fetchPrices
  };
}

export default connect(mapStateToProps)(StateTax);
