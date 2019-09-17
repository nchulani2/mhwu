import React, { Component } from 'react';
import 'src/Style/ArmorList.css';
import { Link, withRouter } from 'react-router-dom';

class ArmorList extends Component {
  handleArmors = armor => {
    return (
      <Link to={`/armors/${armor.id}`} key={armor.id} className="filterArmors">
        <div className="armor">
          <div className="armorDeets">{armor.name}</div>
        </div>
      </Link>
    );
  };

  render() {
    const { armors } = this.props;

    return (
      <div className="armorGrid">
        {armors.map(armor => this.handleArmors(armor))}
      </div>
    );
  }
}

export default withRouter(ArmorList);
