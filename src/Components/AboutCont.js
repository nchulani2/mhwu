import React from 'react';
import RouteButton from './RouteButton';
import { withRouter } from 'react-router-dom';
import '../Style/AboutCont.css';

const AboutCont = props => {
  return (
    <div className="aboutPos">
      <div className="aboutCont animated fadeInUp faster">
        <div className="aboutContText">
          MHWU is a React and Redux built application that houses a variety of
          information regarding current monsters, armor sets and skills.
          Currently, backend for this application is under development and will
          feature upcoming monsters for Iceborne. <br></br>
          <br></br> <span style={{ color: '#cfee1d' }}>Happy Huntin'!</span>
        </div>
        <div className="routers">
          <div className="outerButt">
            <RouteButton
              buttonText="Skills"
              buttonLink="skills"
              animDelay="0.2s"
              margin="0"
              padding="12px"
              letterSpacing="1px"
              fontSize="14px"
              background="rgba(0,0,0,0.6)"></RouteButton>
          </div>
          <div className="outerButt">
            <RouteButton
              buttonText="Armor"
              buttonLink="armors"
              animDelay="0.2s"
              margin="0"
              padding="12px"
              letterSpacing="1px"
              fontSize="14px"
              background="rgba(0,0,0,0.6)"></RouteButton>
          </div>
        </div>
        <div className="routers">
          <div className="outerButt">
            <RouteButton
              buttonText="monsters"
              buttonLink="monsters"
              animDelay="0.2s"
              margin="0"
              padding="12px"
              letterSpacing="1px"
              fontSize="14px"
              background="rgba(0,0,0,0.6)"></RouteButton>
          </div>
          <div className="outerButt">
            <RouteButton
              buttonText="charms"
              buttonLink="charms"
              animDelay="0.2s"
              margin="0"
              padding="12px"
              letterSpacing="1px"
              fontSize="14px"
              background="rgba(0,0,0,0.6)"></RouteButton>
          </div>
        </div>
        <div className="outerButt" style={{ margin: '0 auto' }}>
          <RouteButton
            buttonText="Home"
            buttonLink=""
            animDelay="0.2s"
            margin="0"
            padding="12px"
            letterSpacing="1px"
            fontSize="14px"
            background="rgba(0,0,0,0.6)"></RouteButton>
        </div>
      </div>
    </div>
  );
};

export default withRouter(AboutCont);
