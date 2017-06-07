import React, { Component } from "react";
import { connect } from "react-redux";
import { calculateTotal } from "../actions/index";
import { bindActionCreators } from "redux";

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

    this.props.calculateTotal(this.state.amount);
    this.setState({ amount: "" });

  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          className="col-md-8 input-bar"
          placeholder="Type amount or final total"
          value={this.state.amount}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ calculateTotal }, dispatch);
}

export default connect(null, mapDispatchToProps)(InputBar);
