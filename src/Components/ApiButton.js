import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmallMonsters, getLargeMonsters } from '../Actions';

import '../Style/ApiButtons.css';

class ApiButtons extends Component {
  handleMonsties = e => {
    e.preventDefault();

    switch (e.target.className) {
      case 'smallMonsties':
        if (this.props.currState) {
          return;
        } else {
          this.props.getSmallMonsters();

          break;
        }

      case 'largeMonsties':
        if (this.props.currState) {
          return;
        } else {
          this.props.getLargeMonsters();

          break;
        }

      default:
        return null;
    }
  };

  render() {
    return (
      <button
        style={{ color: this.props.currState ? '#cfee1d' : '' }}
        onClick={this.handleMonsties}
        className={this.props.class}
        id="buttonEle">
        {this.props.buttonText}
      </button>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.data };
};
export default connect(
  mapStateToProps,
  {
    getSmallMonsters,
    getLargeMonsters
  }
)(ApiButtons);
