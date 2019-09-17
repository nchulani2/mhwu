import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Style/ApiButtons.css';

class ApiButtons extends Component {
  submitToHandle = e => {
    e.preventDefault();
    // if monster page si present
    if (this.props.handleMonsties) {
      this.props.handleMonsties(e);
    } else {
    }
    // if armor page is present
  };

  render() {
    return (
      <button
        style={{ color: this.props.currState ? '#cfee1d' : '' }}
        onClick={this.submitToHandle}
        className={this.props.class}
        id="buttonEle">
        {this.props.buttonText}
      </button>
    );
  }
}

export default withRouter(ApiButtons);
