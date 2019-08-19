import React, { Component } from 'react';
import scrollIntoView from 'smooth-scroll-into-view-if-needed';
import { connect } from 'react-redux';
import { getSmallMonsters, getLargeMonsters } from '../Actions';

import '../Style/ApiButtons.css';

class ApiButtons extends Component {
  state = {
    smallActive: false,
    largeActive: true,
    currScrollPos: window.pageYOffset
  };
  componentDidMount = () => {
    const handleButtonScrolled = () => {
      this.setState({
        currScrollPos: window.pageYOffset
      });

      if (this.state.currScrollPos > buttonPos + 50) {
        apiButtons.classList.add('fixEm', 'animated', 'bounceInLeft', 'fast');
        apiButtons.style.width = '0';
      } else if (this.state.currScrollPos < buttonPos) {
        apiButtons.classList.remove(
          'fixEm',
          'animated',
          'bounceInLeft',
          'fast'
        );
        apiButtons.style.width = '100%';
      } else {
        return;
      }
    };
    const apiButtons = document.querySelector('.apibuttons');
    const buttonPos = apiButtons.offsetTop;
    window.addEventListener('scroll', handleButtonScrolled);
  };

  goIntoView = e => {
    const topOfList = document.querySelector('.monsterlist');
    scrollIntoView(topOfList, {
      scrollMode: 'always',
      block: 'start',
      inline: 'nearest',
      duration: window.innerWidth > 499 ? 100 : 2500,
      ease: t =>
        t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t
    });
  };

  handleMonsties = e => {
    e.preventDefault();

    switch (e.target.className) {
      case 'smallMonsties':
        if (this.state.smallActive) {
          return;
        } else {
          this.setState({
            smallActive: true,
            largeActive: false
          });

          this.props.getSmallMonsters();
          this.goIntoView();
          break;
        }

      case 'largeMonsties':
        if (this.state.largeActive) {
          return;
        } else {
          this.setState({
            smallActive: false,
            largeActive: true
          });

          this.props.getLargeMonsters();
          this.goIntoView();
          break;
        }

      default:
        return null;
    }
  };

  render() {
    return (
      <div className="apibuttons">
        <button
          style={{ color: this.state.largeActive ? '#cfee1d' : '' }}
          onClick={this.handleMonsties}
          className="largeMonsties">
          Large monsters
        </button>
        <button
          style={{ color: this.state.smallActive ? '#cfee1d' : '' }}
          onClick={this.handleMonsties}
          className="smallMonsties">
          Small monsters
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { monsters: state.monsters };
};
export default connect(
  mapStateToProps,
  {
    getSmallMonsters,
    getLargeMonsters
  }
)(ApiButtons);
