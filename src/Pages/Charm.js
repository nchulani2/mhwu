import React, { Component } from 'react';
import Loading from 'src/Components/Loading';
import CharmContent from 'src/Components/Charms/CharmContent';
import { getSpecCharm } from 'src/Actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Charm extends Component {
  componentDidMount() {
    const { charmId } = this.props.match.params;
    this.props.getSpecCharm(charmId);
  }

  render() {
    window.scrollTo(0, 0);
    const { charmData, loading } = this.props.data;

    return (
      <div
        style={{
          width: '100%',
          height: loading ? '100vh' : '100%'
        }}>
        {charmData.length !== 0 ? (
          <CharmContent charm={charmData}></CharmContent>
        ) : (
          <Loading loadingText="charm"></Loading>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.charms };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSpecCharm }
  )(Charm)
);
