import React, { Component } from 'react';
import ParallaxTitle from './ParallaxTitle';
import Nav from './Nav';
import ApiButtons from './ApiButtons';

import { connect } from 'react-redux';
import { getLargeMonsters } from '../Actions';

import MonsterList from './MonsterList';

class App extends Component {
  componentDidMount = () => {
    this.props.getLargeMonsters();
  };

  render() {
    return (
      <div
        className="app animated fadeIn fast delay-0s"
        style={{ width: '100%', height: '100%' }}>
        <Nav />

        <main id="page-wrap">
          <ParallaxTitle />
          <ApiButtons />
          {/* If monster array is present, return monsterList */}
          {this.props.monsters.length !== 0 ? (
            <MonsterList monsters={this.props.monsters} />
          ) : null}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { monsters: state.monsters };
};

export default connect(
  mapStateToProps,
  { getLargeMonsters }
)(App);
