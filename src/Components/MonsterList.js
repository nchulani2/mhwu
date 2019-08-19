import React, { Component } from 'react';
import MagicGrid from 'magic-grid';
import Monster from './Monster';

export default class MonsterList extends Component {
  loadContainer = length => {
    let magicGrid = new MagicGrid({
      container: '.monsterlist', // Required. Can be a class, id, or an HTMLElement
      static: true, // Required for static content. Default: false.
      items: length, // Required for dynamic content. Initial number of items in the container.
      gutter: 30, // Optional. Space between items. Default: 25(px).
      maxColumns: 5, // Optional. Maximum number of columns. Default: Infinite.
      useMin: false, // Optional. Prioritize shorter columns when positioning items. Default: false.
      useTransform: true, // Optional. Position items using CSS transform. Default: True.
      animate: true // Optional. Animate item positioning. Default: false.
    });
    magicGrid.listen();
    magicGrid.positionItems();
  };
  componentDidMount = () => {
    this.loadContainer(this.props.monsters.length);
  };
  //  need to update and build new container due to new props coming in
  componentDidUpdate = (newProps, currentState) => {
    if (newProps.monsters !== this.props.monsters) {
      this.loadContainer(newProps.monsters.length);
    }
  };

  handleMonsters = monster => {
    return <Monster key={monster.id} monster={monster} />;
  };
  render() {
    var { monsters } = this.props;

    return (
      <div
        className="monsterlist"
        style={{
          width: '95%',
          height: '100%',
          margin: '50px auto 200px auto'
        }}>
        {monsters.map(monster => this.handleMonsters(monster))}
      </div>
    );
  }
}
