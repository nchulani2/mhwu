import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RouteTitle from '../Components/RouteTitle';

class Armor extends Component {
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

export default withRouter(Armor);
