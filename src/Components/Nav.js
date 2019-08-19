import React, { Component } from 'react';
import NavSvg from './NavSvg';
import ReactHowler from 'react-howler';
import MenuMhwSound from '../Sounds/nav_menu_sound.ogg';
import Sound from './Sound';
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
        playing: !this.state.loaded ? !this.state.playing : false
      });
      document.documentElement.classList.add('.noScroll');
      this.playerMenu.stop();
    } else {
      this.setState({
        isOpen: false,
        playing: !this.state.loaded ? !this.state.playing : false
      });
      document.documentElement.classList.remove('.noScroll');
    }
  };

  handleLoad = () => {
    this.setState({
      loaded: true
    });
  };

  render() {
    return (
      <div className="navigation">
        <div className="nav animated fadeInDown">
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
            <a
              href="#something"
              className={`${
                this.state.isOpen ? 'animated fadeInLeft fast' : 'hideIt'
              }`}>
              About
            </a>
            <a
              href="#something"
              className={`${
                this.state.isOpen ? 'animated fadeInLeft fast' : 'hideIt'
              }`}>
              Skills
            </a>
            <a
              href="#something"
              className={`${
                this.state.isOpen ? 'animated fadeInLeft fast' : 'hideIt'
              }`}>
              Armor
            </a>
            <a
              href="#something"
              className={`${
                this.state.isOpen ? 'animated fadeInLeft fast' : 'hideIt'
              }`}>
              Monsters
            </a>
          </div>
          <div className="noticeBlock">
            <div
              className={`notice ${
                this.state.isOpen ? 'animated bounceInUp' : 'hideIt'
              }`}>
              Routing isn't supported as yet, so these links have been disabled
              until further notice <br />
              <span style={{ color: 'rgb(208,238,29)' }}>
                {' '}
                Developed by MH veteran Naveen Chulani
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
