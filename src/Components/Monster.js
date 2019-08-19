import React, { Component } from 'react';
import Tilt from 'react-tilt';
import Modal from 'react-modal';
import ModalContent from './ModalContent';
import '../Style/Monster.css';

export default class Monster extends Component {
  state = {
    showDetails: false,
    showModal: false
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

  handleOpenModal = () => {
    this.setState({ showModal: true, showDetails: true });
    document.documentElement.classList.add('noScroll');
  };

  handleCloseModal = () => {
    this.setState({ showModal: false, showDetails: false });

    document.documentElement.classList.remove('noScroll');
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
              transform: showDetails ? 'translate(-20%,-43%)' : '',
              transition: showDetails ? 'all linear 0.15s' : '',
              boxShadow: showDetails
                ? 'inset 0px 0px 120px 100px rgba(208, 239, 28, 1)'
                : ''
            }}>
            <img
              src={this.props.monster.icon}
              alt={this.props.monster.description}
            />
          </div>
          {this.state.showDetails ? (
            <div className="deets">
              <div className="animated fadeInUp delay-0s faster">
                {this.props.monster.name}

                {/*NOTE Modal starts here! */}
                <button
                  className="openModalButton"
                  onClick={this.handleOpenModal}>
                  Info
                </button>
                <Modal
                  style={{
                    overlay: {
                      backgroundColor: 'rgba(0,0,0,0.8)'
                    },
                    content: {
                      top: window.innerWidth > 499 ? '35px' : '20px',
                      bottom: window.innerWidth > 499 ? '35px' : '20px',
                      left: window.innerWidth > 499 ? '50px' : '20px',
                      right: window.innerWidth > 499 ? '50px' : '20px',
                      padding:
                        window.innerWidth > 499 ? '2% 10% 3% 10%' : '5% 3%',
                      backgroundColor: 'rgb(0,0,0)',
                      border: 'solid rgba(208,238,29,1)',
                      borderWidth: 'thin'
                    }
                  }}
                  ariaHideApp={false}
                  isOpen={this.state.showModal}
                  contentLabel="onRequestClose Example">
                  <button
                    className="closeModalButton"
                    onClick={this.handleCloseModal}>
                    Close
                  </button>
                  <ModalContent monster={this.props.monster} />
                </Modal>
                {/* NOTE Modal ends here! */}
              </div>
            </div>
          ) : null}
        </Tilt>
      </div>
    );
  }
}
