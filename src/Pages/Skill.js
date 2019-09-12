import React, { Component } from 'react';
import Loading from 'src/Components/Loading';
import SkillContent from 'src/Components/Skills/SkillContent';
import { getSpecSkill } from 'src/Actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Charm extends Component {
  componentDidMount() {
    const { skillId } = this.props.match.params;
    this.props.getSpecSkill(skillId);
  }

  render() {
    window.scrollTo(0, 0);
    const { skillData, loading } = this.props.data;

    return (
      <div
        style={{
          width: '100%',
          height: loading ? '100vh' : '100%'
        }}>
        {skillData.length !== 0 ? (
          <SkillContent skill={skillData}></SkillContent>
        ) : (
          <Loading loadingText="charm"></Loading>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { data: state.skills };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSpecSkill }
  )(Charm)
);
