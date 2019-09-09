import React, { Component } from 'react';
import RouteTitle from '../Components/RouteTitle';
import Loading from '../Components/Loading';
import InputFilter from '../Components/InputFilter';
import SkillsList from '../Components/SkillsList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSkills } from '../Actions';

class Skills extends Component {
  filterSkillsResults = () => {
    // Basically, this works by matching the index of the DOM represented name with the user's input name
    var inputVal, list, link, details, textValue;
    //   Value from user input to be
    inputVal = document.getElementById('inputEle').value.toUpperCase();
    // grid List
    list = document.querySelector('.skillsList');
    //   Each link
    link = list.getElementsByClassName('FILTER');

    for (let i = 0; i < link.length; i++) {
      //   getting the area where details is represented in the DOM
      details = link[i].getElementsByClassName('FILTER-CHECKER')[0];
      // getting that inner text
      textValue = details.textContent || details.innerText;
      // check if
      if (textValue.toUpperCase().indexOf(inputVal) > -1) {
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
          height: loading ? '100vh' : '100%'
        }}>
        <RouteTitle titleText="skills"></RouteTitle>
        {skillData.length !== 0 && !loading ? (
          <div style={{ padding: '80px 0' }}>
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
