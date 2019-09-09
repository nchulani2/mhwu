import React, { Component } from 'react';
import Logo_mhw from '../Images/logo_mhw.png';
import TextLogo from './TextLogo';
import { withRouter } from 'react-router-dom';

import '../Style/Title.css';

class Title extends Component {
  render() {
    return (
      <div className="title animated fadeIn faster">
        <div className="flexTitle">
          <img className="titleLogo" src={Logo_mhw} alt="titlelogo" />
          <div className="details">
            <TextLogo />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Title);
