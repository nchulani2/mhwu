import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCharms } from '../Actions';
import RouteTitle from '../Components/RouteTitle';

class Charms extends Component {
  componentDidMount = () => {
    this.props.getCharms();
  };
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          width: '100%',
          height: '100vh'
        }}>
        <RouteTitle titleText="Charms"></RouteTitle>
        <section
          style={{
            color: 'white',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)',
            textTransform: 'uppercase',
            fontSize: '20px',
            fontFamily: 'MedievalSharp, cursive'
          }}>
          Page under development
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.charms };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getCharms }
  )(Charms)
);
