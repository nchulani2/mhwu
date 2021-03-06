import React, { Component } from 'react';
import RouteTitle from 'src/Components/RouteTitle';
import Loading from 'src/Components/Loading';
import InputFilter from 'src/Components/InputFilter';
import SkillsList from 'src/Components/Skills/SkillsList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSkills } from 'src/Actions';

class Skills extends Component {
  filterSkillsResults = () => {
    // Basically, this works by matching the index of the DOM represented name with the user's input name
    var inputVal, list, link, details;
    //   Value from user input to be
    inputVal = document.getElementById('inputEle').value.toUpperCase();
    // grid List
    list = document.querySelector('.skillGrid');
    //   Each link
    link = list.getElementsByClassName('filterSkills');

    for (let i = 0; i < link.length; i++) {
      //   getting the area where details is represented in the DOM
      details = link[i].textContent || link[i].innerText;

      if (details.toUpperCase().indexOf(inputVal) > -1) {
        // NOTE indexOF returns -1 if that character is not present in the array
        link[i].style.display = '';
      } else {
        link[i].style.display = 'none';
      }
    }
  };

  componentDidMount = () => {
    this.props.getSkills();
  };

  render() {
    const { loading, skillData } = this.props.data;
    return (
      <div
        style={{
          width: '100%',
          height: loading ? '100vh' : '100%',
          padding: '90px 0'
        }}>
        <RouteTitle titleText="skills"></RouteTitle>
        {skillData.length !== 0 && skillData.length > 2 && !loading ? (
          <div>
            <InputFilter
              filterResults={this.filterSkillsResults}
              placeholderText="skill"></InputFilter>
            <SkillsList skills={skillData}></SkillsList>
          </div>
        ) : (
          <Loading loadingText="skills"></Loading>
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
    { getSkills }
  )(Skills)
);
