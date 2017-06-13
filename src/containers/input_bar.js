import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchPrices } from "../actions/index";

class InputBar extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ amount: event.target.value });
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchPrices(this.state.amount);
    this.setState({ amount: "" });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit} className="row input-container">
          <input
            className="col-md-8 input-box"
            placeholder="Prices"
            value={this.state.amount}
            onChange={this.onInputChange}
          />
          <button type="submit" className="col-md-4 submit-button">Submit</button>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPrices }, dispatch);
}

export default connect(null, mapDispatchToProps)(InputBar);
