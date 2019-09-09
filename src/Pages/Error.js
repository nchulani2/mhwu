import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Error extends Component {
  render() {
    return <div>error</div>;
  }
}

export default withRouter(Error);
