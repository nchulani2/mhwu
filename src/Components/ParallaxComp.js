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
        height: '100vh',
        background: 'black',
        zIndex: '1'
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
      <div className="routers">
        <RouteButton
          buttonText="About"
          buttonLink="about"
          animDelay="0.5s"
          margin="10px"
          background="#262626"></RouteButton>
        <RouteButton
          buttonText="Skills"
          buttonLink="skills"
          animDelay="0.6s"
          margin="10px"
          background="#262626"></RouteButton>
        <RouteButton
          buttonText="Armor"
          buttonLink="armor"
          animDelay="0.7s"
          margin="10px"
          background="#262626"></RouteButton>
        <RouteButton
          buttonText="Monsters"
          buttonLink="monsters"
          animDelay="0.8s"
          margin="10px"
          background="#262626"></RouteButton>
      </div>
    </div>
  );
};
export default withRouter(ParallaxComp);
