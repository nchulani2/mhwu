import React, { Component } from 'react';
import Loading from 'src/Components/Loading';
import MonsterContent from 'src/Components/Monsters/MonsterContent';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSpecMonster } from 'src/Actions';

class Monster extends Component {
  componentDidMount = () => {
    const { monsterId } = this.props.match.params;
    this.props.getSpecMonster(monsterId);
  };

  render() {
    window.scrollTo(0, 0);
    const { loading, monsterData } = this.props.data;
    // console.log(loading, monsterData);

    return (
      <div
        style={{
          width: '100%',
          height: loading ? '100vh' : '100%'
        }}>
        {monsterData.length !== 0 && !loading ? (
          <div>
            <MonsterContent monster={monsterData}></MonsterContent>
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
