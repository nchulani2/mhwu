import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../Style/Error.css';
import ErrorImg from '../Images/error.png';
import RouteButton from '../Components/RouteButton';

class Error extends Component {
  render() {
    return (
      <div className="error animated fadeIn faster">
        <div className="errorBox">
          <img src={ErrorImg} alt="error here"></img>
          <div className="errorTitle">
            <div style={{ paddingBottom: '5px' }}>Error 404</div>
            <div>Page not found</div>
          </div>
          <div className="errorText">
            Gore Magala seems to be judging you with his non-existant eyes
          </div>
          <div style={{ width: '120px', margin: '0 auto' }}>
            <RouteButton
              buttonText="home"
              buttonLink=""
              animDelay="0.5s"
              margin="0"
              padding="12px"
              letterSpacing="1px"
              fontSize="14px"
              background="#262626"></RouteButton>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Error);
