import React, { Component } from 'react';
import Monster from './Monster';
import '../Style/MonsterList.css';
import { Link, withRouter } from 'react-router-dom';

class MonsterList extends Component {
  handleMonsters = monster => {
    return (
      <Link to={`/monsters/${monster.id}`} key={monster.id}>
        <Monster monster={monster} />
      </Link>
    );
  };
  render() {
    var { monsters } = this.props;

    return (
      <div className="monsterGrid">
        {monsters.map(monster => this.handleMonsters(monster))}
      </div>
    );
  }
}

export default withRouter(MonsterList);
