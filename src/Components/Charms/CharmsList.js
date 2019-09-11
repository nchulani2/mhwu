import React, { Component } from 'react';
import 'src/Style/CharmsList.css';
import { withRouter, Link } from 'react-router-dom';

class CharmsList extends Component {
  handleCharms = charm => {
    return (
      <Link to={`/charms/${charm.id}`} key={charm.id} className="filterCharms">
        <div className="charm">
          <div className="charmDeets">{charm.name}</div>
        </div>
      </Link>
    );
  };
  render() {
    return (
      <div className="charmGrid">
        {this.props.charms.map(charm => this.handleCharms(charm))}
      </div>
    );
  }
}

export default withRouter(CharmsList);
