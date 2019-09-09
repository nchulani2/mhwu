import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Tilt from 'react-tilt';
// import Modal from 'react-modal';
// import ModalContent from './ModalContent';
import '../Style/Monster.css';

class Monster extends Component {
  state = {
    showDetails: false
  };

  tiltOptions = {
    reverse: false, // reverse the tilt direction
    max: 20, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 300, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: 'cubic-bezier(.03,.98,.52,.99)' // Easing on enter/exit.
  };

  entered = e => {
    e.preventDefault();
    if (e.type === 'mouseleave') {
      if (this.state.showModal) {
        this.setState({ showDetails: true });
      } else {
        this.setState({
          showDetails: false
        });
      }

      // if mouse entered
    } else {
      this.setState({ showDetails: true });
    }
  };

  render() {
    const { showDetails } = this.state;
    const { monster } = this.props;

    return (
      <div
        className="monster"
        onMouseEnter={this.entered}
        onMouseMove={this.entered}
        onMouseLeave={this.entered}>
        <Tilt className="tilt" options={this.tiltOptions}>
          <div
            className="tiltInner"
            style={{
              top: showDetails ? '20%' : '',
              left: showDetails ? '43%' : '',
              transform: showDetails
                ? 'translate(-20%,-30%) translateZ(40px) scale(1.1)'
                : '',
              transition: showDetails ? 'all ease 0.15s' : '',

              boxShadow: showDetails
                ? 'inset 0px 0px 120px 100px rgba(208, 239, 28, 1)'
                : ''
            }}>
            <img src={monster.icon} alt={monster.description} />
          </div>

          <div className="deets">
            <div
              style={{
                paddingBottom: '10px',
                display: showDetails ? 'block' : 'none'
              }}
              className={`${
                showDetails ? 'animated fadeIn faster delay-0s' : ''
              }`}>
              {monster.ailments.length !== 0
                ? monster.ailments.map(ailment => (
                    <img
                      key={ailment.id}
                      style={{ width: '25px', height: '25px' }}
                      src={ailment.icon}
                      alt={ailment.description}
                    />
                  ))
                : null}
            </div>
            <div
              style={{
                color: showDetails ? '#cfee1d' : 'white',
                transition: 'all ease 0.15s'
              }}>
              {monster.name}
            </div>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default withRouter(Monster);
