import React from 'react';
import Title from './Title';
import RouteButton from './RouteButton';
import { withRouter } from 'react-router-dom';
import '../Style/ParallaxComp.css';

const ParallaxComp = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100vh'
      }}>
      <figure className="figureEle" id="figureEle">
        <ul className="backgroundImgs">
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <Title></Title>
      </figure>
      <div className="router">
        <RouteButton
          buttonText="Click here!"
          buttonLink="about"
          animDelay="0.2s"
          margin="0"
          background="#262626"
          padding={window.innerWidth > 499 ? '15px 40px' : '15px 25px'}
          letterSpacing="2px"
          fontSize={window.innerWidth > 499 ? '16px' : '13px'}></RouteButton>
      </div>
    </div>
  );
};
export default withRouter(ParallaxComp);
