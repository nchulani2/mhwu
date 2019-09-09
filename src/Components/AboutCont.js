import React from 'react';
import RouteButton from './RouteButton';
import '../Style/AboutCont.css';

const aboutButtonStyle = {
  position: 'absolute',
  height: '50px',
  width: '180px',
  bottom: '10px',
  left: '50%',
  transform: 'translate(-50%, -10px)'
};

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
        <div style={{ ...aboutButtonStyle }}>
          <RouteButton
            buttonText="Back to Home"
            buttonLink=""
            animDelay="0.2s"
            margin="0"
            background="rgba(0,0,0,0.6)"></RouteButton>
        </div>
      </div>
    </div>
  );
};

export default AboutCont;
