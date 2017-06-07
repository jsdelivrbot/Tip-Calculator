import React, { Component } from "react";
import { connect } from "react-redux";

class StateTax extends Component {

  render() {
    return (
      <div className="col-md-6">
      <h3>Select State:</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalAmount: state.totalAmount
  };
}

export default connect(mapStateToProps)(StateTax);
