import React, { Component } from 'react';
import ApiButton from 'src/Components/ApiButton';
import MonsterList from 'src/Components/Monsters/MonsterList';
import Loading from 'src/Components/Loading';
import RouteTitle from 'src/Components/RouteTitle';
import InputFilter from 'src/Components/InputFilter';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLargeMonsters, getSmallMonsters } from 'src/Actions';
import 'src/Style/ApiButtonContainer.css';

class Monsters extends Component {
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

  handleMonsties = e => {
    e.preventDefault();

    switch (e.target.className) {
      case 'smallMonsties':
        if (this.props.data.smallActive) {
          return;
        } else {
          this.props.getSmallMonsters();
          break;
        }

      case 'largeMonsties':
        if (this.props.data.largeActive) {
          return;
        } else {
          this.props.getLargeMonsters();
          break;
        }

      default:
        return null;
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
          padding: loading ? '0px' : '90px 0px'
        }}>
        <RouteTitle titleText="monsters"></RouteTitle>

        {monsterData.length !== 0 && monsterData.length >= 2 && !loading ? (
          <div>
            <InputFilter
              filterResults={this.filterMonstersResults}
              placeholderText="monster"></InputFilter>

            <MonsterList monsters={monsterData}></MonsterList>
            <div className="apiButtonsContainer">
              <ApiButton
                class="largeMonsties"
                buttonText="large monsters"
                handleMonsties={this.handleMonsties}
                currState={largeActive}></ApiButton>
              <ApiButton
                class="smallMonsties"
                buttonText="small monsters"
                handleMonsties={this.handleMonsties}
                currState={smallActive}></ApiButton>
            </div>
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
    { getLargeMonsters, getSmallMonsters }
  )(Monsters)
);
