import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ParallaxComp from '../Components/ParallaxComp';

class Home extends Component {
  render() {
    return <ParallaxComp />;
  }
}

export default withRouter(Home);
