import React, { Component } from 'react';
import Loading from '../Components/Loading';
import MonsterContent from '../Components/MonsterContent.js';
import RouteButton from '../Components/RouteButton';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSpecMonster } from '../Actions';

class Monster extends Component {
  componentDidMount = () => {
    const { monsterId } = this.props.match.params;
    this.props.getSpecMonster(monsterId);
  };

  render() {
    const { loading, monsterData } = this.props.data;
    // console.log(loading, monsterData);

    return (
      <div
        style={{
          width: '100%',
          height: loading ? '100vh' : '100%',
          background: 'black',
          zIndex: '1'
        }}>
        {monsterData.length !== 0 && !loading ? (
          <div>
            <MonsterContent monster={monsterData}></MonsterContent>
            <div
              style={{
                width: '50px',
                position: 'fixed',
                left: '5%',
                top: '3%',
                transform: 'translate(-5%,-3%)'
              }}>
              <RouteButton
                buttonLink="monsters"
                animDelay="0s"
                background="#262626"
                buttonText="🢤"></RouteButton>
            </div>
          </div>
        ) : (
          <Loading loadingText="monstie"></Loading>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.data };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSpecMonster }
  )(Monster)
);
