import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import AboutCont from '../Components/AboutCont';
import RouteTitle from '../Components/RouteTitle';
import HunterOne from '../Images/Hunter/HunterOne.png';
import HunterTwo from '../Images/Hunter/HunterTwo.png';

class About extends Component {
  hunterOneStyle = {
    position: 'absolute',
    top: '40%',
    left: '30px',
    transform: 'translate(0,-40%)',
    zIndex: '-1'
  };
  hunterTwoStyle = {
    position: 'relative',
    top: '50%',
    right: '0',
    transform: 'translate(0,-50%)',
    zIndex: '-1',
    width: '400px',
    marginLeft: '1150px'
  };
  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '100vh'
        }}>
        <RouteTitle titleText="About"></RouteTitle>
        <AboutCont></AboutCont>
        <div style={{ ...this.hunterOneStyle }}>
          <div
            className="animated fadeInLeft"
            style={{ animationDelay: '0.3s' }}>
            <img src={HunterOne} alt="Hunter One"></img>
          </div>
        </div>
        <div style={{ ...this.hunterTwoStyle }}>
          <div
            className="animated fadeInRight"
            style={{ animationDelay: '0.3s' }}>
            <img
              src={HunterTwo}
              alt="Hunter Two"
              style={{ width: '70%' }}></img>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(About);
