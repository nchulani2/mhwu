import React, { Component } from 'react';
import RouteTitle from '../Components/RouteTitle';
import { withRouter } from 'react-router-dom';

class Error extends Component {
  render() {
    return <RouteTitle titleText="Error"></RouteTitle>;
  }
}

export default withRouter(Error);
