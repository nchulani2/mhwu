import React, { Component } from 'react';
import ApiButton from '../Components/ApiButton';
import MonsterList from '../Components/MonsterList';
import Loading from '../Components/Loading';
import RouteTitle from '../Components/RouteTitle';
import InputFilter from '../Components/InputFilter';
import RouteButton from '../Components/RouteButton';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLargeMonsters } from '../Actions';

class Monsters extends Component {
  state = {
    filter: false
  };
  apiStyle = {
    position: 'fixed',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: '10px',
    left: '50%',
    transform: 'translate(-50%, 0)',
    textAlign: 'center',
    zIndex: '3'
  };

  filterMonstersResults = () => {
    // Basically, this works by matching the index of the DOM represented name with the user's input name
    var inputVal, list, link, details, textValue;
    //   Value from user input to be
    inputVal = document.getElementById('inputEle').value.toUpperCase();
    // grid List
    list = document.querySelector('.monsterGrid');
    //   Each link
    link = list.getElementsByTagName('a');

    for (let i = 0; i < link.length; i++) {
      //   getting the area where details is represented in the DOM
      details = link[i].getElementsByClassName('deets')[0];
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
    this.props.getLargeMonsters();
  };

  render() {
    const { monsterData, loading, largeActive, smallActive } = this.props.data;

    return (
      <div
        style={{
          width: '100%',
          height: loading ? '100vh' : '100%',
          padding: loading ? '0px' : '80px 0px'
        }}>
        <div
          style={{
            width: '50px',
            position: 'fixed',
            left: '5%',
            top: '3%',
            zIndex: '10',
            transform: 'translate(-5%,-3%)'
          }}>
          <RouteButton
            buttonLink=""
            animDelay="0s"
            background="#262626"
            buttonText="🢤"></RouteButton>
        </div>
        <RouteTitle titleText="monsters"></RouteTitle>

        <div style={{ ...this.apiStyle }}>
          <ApiButton
            class="largeMonsties"
            buttonText="large monsters"
            currState={largeActive}></ApiButton>
          <ApiButton
            class="smallMonsties"
            buttonText="small monsters"
            currState={smallActive}></ApiButton>
        </div>
        {monsterData.length !== 0 && monsterData.length >= 2 && !loading ? (
          <div>
            <InputFilter
              filterResults={this.filterMonstersResults}
              placeholderText="monster"></InputFilter>
            <MonsterList monsters={monsterData}></MonsterList>
          </div>
        ) : (
          <Loading loadingText="monsties"></Loading>
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
    { getLargeMonsters }
  )(Monsters)
);
