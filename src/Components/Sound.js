import React, { Component } from 'react';
import ReactHowler from 'react-howler';
import { withRouter } from 'react-router-dom';
import TitleScreenSound from '../Sounds/soundmhw.ogg';
import '../Style/Sound.css';

class Nav extends Component {
  state = {
    playing: false,
    loaded: false,
    prevScrollPos: window.pageYOffset
  };

  handleLoad = () => {
    this.setState({
      loaded: true
    });
  };
  togglePlay = () => {
    if (this.state.loaded) {
      this.playerMusic.stop();
      this.setState({ playing: !this.state.playing });
    }
  };
  render() {
    return (
      <div className="sound">
        <ReactHowler
          src={TitleScreenSound}
          playing={this.state.playing}
          loop={true}
          volume={0.5}
          onLoad={this.handleLoad}
          ref={ref => (this.playerMusic = ref)}
        />

        <button
          onClick={this.togglePlay}
          className={`soundButton ${
            this.props.open ? 'animated bounceInDown' : ''
          }`}
          style={{ color: this.state.playing ? 'rgb(207, 238, 29)' : '' }}>
          <span>
            Music{' '}
            <i
              className={
                this.state.playing ? 'volume up icon' : 'volume off icon'
              }
            />
          </span>
        </button>
      </div>
    );
  }
}
export default withRouter(Nav);
