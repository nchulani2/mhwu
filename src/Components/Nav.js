import React, { Component } from 'react';
import NavSvg from './NavSvg';
import ReactHowler from 'react-howler';
import MenuMhwSound from '../Sounds/nav_menu_sound.ogg';
import Sound from './Sound';
import { Link } from 'react-router-dom';
import '../Style/Nav.css';

export default class Nav extends Component {
  state = {
    isOpen: false,
    loaded: false,
    playing: false
  };
  componentDidMount = () => {
    document.querySelector('#overlayMenu').classList.add('hideIt');
  };
  handleMenu = e => {
    if (!this.state.isOpen) {
      document.querySelector('#overlayMenu').classList.remove('hideIt');

      this.setState({
        isOpen: true,
        playing: this.state.loaded ? !this.state.playing : false
      });
      document.documentElement.classList.add('.noScroll');
      this.playerMenu.stop();
    } else {
      this.setState({
        isOpen: false,
        playing: this.state.loaded ? !this.state.playing : false
      });
      document.documentElement.classList.remove('.noScroll');
    }
  };

  handleLoadMenu = () => {
    this.setState({
      loaded: true
    });
  };

  render() {
    return (
      <div className="navigation">
        <div className="nav animated fadeInDown faster">
          <ReactHowler
            src={MenuMhwSound}
            playing={this.state.playing}
            loop={false}
            volume={1.0}
            onLoad={this.handleLoadMenu}
            ref={ref => (this.playerMenu = ref)}
          />
          <button
            onClick={this.handleMenu}
            className="menuContainer"
            style={{ color: this.state.isOpen ? '#cfee1d' : '' }}>
            <NavSvg />
            <span>Menu</span>
            {/* cool kebab menu icon starts here */}
            {/* /* -------------------------------------------------------------------------- */}
            <div className="menuWrapper">
              <div
                className={`menuItemKebab ${
                  this.state.isOpen ? 'menuClose' : ''
                }`}>
                <div
                  className="circle"
                  style={{
                    background: this.state.isOpen ? '#cfee1d' : ''
                  }}
                />
                <div
                  className="circle"
                  style={{
                    background: this.state.isOpen ? '#cfee1d' : ''
                  }}
                />
                <div
                  className="circle"
                  style={{
                    background: this.state.isOpen ? '#cfee1d' : ''
                  }}
                />
                <div
                  style={{
                    background: this.state.isOpen ? '#cfee1d' : ''
                  }}
                  id={`${this.state.isOpen ? 'circleOnOne' : ''}`}
                  className="circle"
                />
                <div
                  style={{
                    background: this.state.isOpen ? '#cfee1d' : ''
                  }}
                  id={`${this.state.isOpen ? 'circleOnTwo' : ''}`}
                  className="circle"
                />
              </div>
            </div>
            {/* cool kebab menu icon ends here */}
            {/* /* -------------------------------------------------------------------------- */}
          </button>
        </div>
        <div
          id="overlayMenu"
          className={`overlayMenu  ${
            this.state.isOpen
              ? 'overlayOn animated fadeInLeft delay-0s'
              : 'animated fadeOutRight delay-0s'
          }`}>
          <Sound open={this.state.isOpen} />
          <div className="flexAnchors">
            <Link
              to="/"
              onClick={() => this.setState({ isOpen: false, playing: false })}
              className={`${
                this.state.isOpen ? 'animated fadeInLeft faster' : 'hideIt'
              }`}>
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => this.setState({ isOpen: false, playing: false })}
              className={`${
                this.state.isOpen ? 'animated fadeInLeft faster' : 'hideIt'
              }`}>
              About
            </Link>

            <Link
              to="/skills"
              onClick={() => this.setState({ isOpen: false, playing: false })}
              className={`${
                this.state.isOpen ? 'animated fadeInLeft faster' : 'hideIt'
              }`}>
              Skills
            </Link>
            <Link
              to="/armor"
              onClick={() => this.setState({ isOpen: false, playing: false })}
              className={`${
                this.state.isOpen ? 'animated fadeInLeft faster' : 'hideIt'
              }`}>
              Armor
            </Link>
            <Link
              to="/monsters"
              onClick={() => this.setState({ isOpen: false, playing: false })}
              className={`${
                this.state.isOpen ? 'animated fadeInLeft faster' : 'hideIt'
              }`}>
              Monsters
            </Link>
          </div>
          <div className="noticeBlock">
            <div
              className={`notice ${
                this.state.isOpen ? 'animated bounceInUp' : 'hideIt'
              }`}>
              Developed by MH veteran Naveen Chulani
            </div>
          </div>
        </div>
      </div>
    );
  }
}
