import React, { Component } from 'react';
import Rellax from 'rellax';
import Logo_mhw from '../Images/logo_mhw.png';
import TextLogo from './TextLogo';
import '../Style/ParallaxTitle.css';

class ParallaxTitle extends Component {
  componentDidMount = () => {
    new Rellax(this.rellaxFig, {
      speed: -2,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    });
    new Rellax(this.rellaxLogo, {
      speed: -1,
      center: false,
      wrapper: null,
      round: false,
      vertical: true,
      horizontal: false
    });
  };

  render() {
    return (
      <figure className="figureEle">
        <div
          className="rellax"
          ref={ref => {
            this.rellaxFig = ref;
          }}>
          <ul className="parallax">
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
          <div className="flexCont animated fadeIn delay-1s">
            <img className="titleLogo" src={Logo_mhw} alt="titlelogo" />
            <div className="details" ref={ref => (this.rellaxLogo = ref)}>
              <TextLogo />
            </div>
          </div>
        </div>
      </figure>
    );
  }
}
export default ParallaxTitle;
