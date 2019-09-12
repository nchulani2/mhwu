import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RouteTitle from 'src/Components/RouteTitle';
import { connect } from 'react-redux';
import { getArmorSets } from 'src/Actions';

class Armors extends Component {
  componentDidMount = () => {
    this.props.getArmorSets();
  };
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh'
        }}>
        <RouteTitle titleText="Armor Sets"></RouteTitle>
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
  return { data: state };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getArmorSets }
  )(Armors)
);
