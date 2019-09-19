import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSpecArmorSet } from 'src/Actions';
import Loading from 'src/Components/Loading';
import ArmorContent from 'src/Components/Armors/ArmorContent';

class Armor extends Component {
  componentDidMount = () => {
    const { armorId } = this.props.match.params;
    this.props.getSpecArmorSet(armorId);
  };
  render() {
    window.scrollTo(0, 0);
    const { armorData, loading } = this.props.data;

    return (
      <div
        style={{
          width: '100%',
          height: loading ? '100vh' : '100%'
        }}>
        {armorData.length !== 0 && Array.isArray(armorData) && !loading ? (
          <ArmorContent armor={armorData}></ArmorContent>
        ) : (
          <Loading loadingText="armor sets"></Loading>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.armors };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSpecArmorSet }
  )(Armor)
);
