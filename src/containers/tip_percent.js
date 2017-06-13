import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { percentage } from "../actions/index";

class TipPercent extends Component {

  calculateTip(percent) {
    var price = 0;
    this.props.fetchPrices.map((eachAmount) => {
      price = price + Number(eachAmount.amount);
    });
    return (price * (percent/100)).toFixed(2);
  }

  updateTip(percent) {
    this.props.percentage(percent);
  }

  render() {
    return (
      <div className="col-md-4">
        <h3>Select Tip:</h3>

        <div className="tip-box" onClick={() => this.updateTip(10)}>
          10% - $ {this.calculateTip(10)}
        </div>

        <div className="tip-box" onClick={() => this.updateTip(15)}>
          15% - $ {this.calculateTip(15)}
        </div>

        <div className="tip-box" onClick={() => this.updateTip(18)}>
          18% - $ {this.calculateTip(18)}
        </div>

        <div className="tip-box" onClick={() => this.updateTip(20)}>
          20% - $ {this.calculateTip(20)}
        </div>

        <div className="tip-box" onClick={() => this.updateTip(25)}>
          25% - $ {this.calculateTip(25)}
        </div>

        <div className="tip-box" onClick={() => this.updateTip(30)}>
          30% - $ {this.calculateTip(30)}
        </div>

        <h3>Tip + Total Price: $ </h3>
      </div>
    );
  }
}



function mapStateToProps(state) {
  return {
    fetchPrices: state.fetchPrices
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ percentage }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TipPercent);
