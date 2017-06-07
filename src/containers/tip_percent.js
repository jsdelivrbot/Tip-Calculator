import React, { Component } from "react";
import { connect } from "react-redux";
import TipBox from "../components/tip_box";

class TipPercent extends Component {
  calculateTip(percent) {

    const perc = percent/100;
    var price = 0;
    this.props.totalAmount.map((eachAmount) => {
      price = price + Number(eachAmount.amount);
    });
    return (price * perc).toFixed(2);

  }

  render() {
    return (
      <div className="col-md-6">
      <h3>Select Tip:</h3>
        <div className="row">

          <TipBox percent="10" />
            <div className="col-md-8">{this.calculateTip(10)}</div>
          <TipBox percent="15" />
            <div className="col-md-8">{this.calculateTip(15)}</div>
          <TipBox percent="18" />
            <div className="col-md-8">{this.calculateTip(18)}</div>

        </div>
        <div className="row">

          <TipBox percent="20" />
            <div className="col-md-8">{this.calculateTip(20)}</div>
          <TipBox percent="25" />
            <div className="col-md-8">{this.calculateTip(25)}</div>
          <TipBox percent="30" />
            <div className="col-md-8">{this.calculateTip(30)}</div>

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    totalAmount: state.totalAmount
  };
}

export default connect(mapStateToProps)(TipPercent);
