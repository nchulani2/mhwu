import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getExactArmor } from 'src/Actions';
import ExactArmorContent from 'src/Components/Armors/ExactArmorContent';
import Loading from 'src/Components/Loading';

class ArmorExact extends Component {
  componentDidMount = () => {
    const { exactArmorId } = this.props.match.params;
    this.props.getExactArmor(exactArmorId);
  };

  render() {
    const { armorData, loading } = this.props.data;

    return (
      <div
        style={{
          width: '100%',
          height: loading ? '100vh' : '100%'
        }}>
        {/* Check if reducer is dispatching an array or not */}
        {!Array.isArray(armorData) && !loading ? (
          <ExactArmorContent exactArmor={armorData}></ExactArmorContent>
        ) : (
          <Loading loadingText="armor"></Loading>
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
    { getExactArmor }
  )(ArmorExact)
);
