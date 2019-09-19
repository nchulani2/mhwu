import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import RouteTitle from 'src/Components/RouteTitle';
import { connect } from 'react-redux';
import { getLowArmorSets, getHighArmorSets } from 'src/Actions';
import Loading from 'src/Components/Loading';
import ArmorList from 'src/Components/Armors/ArmorList';
import ApiButton from 'src/Components/ApiButton';
import InputFilter from 'src/Components/InputFilter';
import 'src/Style/ApiButtonContainer.css';

class Armors extends Component {
  filterArmorResults = () => {
    // Basically, this works by matching the index of the DOM represented name with the user's input name
    var inputVal, list, link, textValue;
    //   Value from user input to be
    inputVal = document.getElementById('inputEle').value.toUpperCase();
    // grid List
    list = document.querySelector('.armorGrid');
    //   Each link
    link = list.getElementsByClassName('filterArmors');

    for (let i = 0; i < link.length; i++) {
      //   getting the area where details is represented in the DOM
      textValue = link[i].textContent || link[i].innerText;

      // check if
      if (textValue.toUpperCase().indexOf(inputVal) > -1) {
        // NOTE indexOF returns -1 if that character is not present in the array
        link[i].style.display = '';
      } else {
        link[i].style.display = 'none';
      }
    }
  };
  handleArmors = e => {
    e.preventDefault();

    switch (e.target.className) {
      case 'lowRank':
        if (this.props.data.lowRank) {
          return;
        } else {
          this.props.getLowArmorSets();
          break;
        }

      case 'highRank':
        if (this.props.data.highRank) {
          return;
        } else {
          this.props.getHighArmorSets();
          break;
        }

      default:
        return null;
    }
  };
  componentDidMount = () => {
    this.props.getHighArmorSets();
  };
  render() {
    const { armorData, lowRank, highRank, loading } = this.props.data;

    return (
      <div
        style={{
          width: '100%',
          height: loading ? '100vh' : '100%',
          padding: loading ? '0px' : '90px 0px'
        }}>
        <RouteTitle titleText="Armor Sets"></RouteTitle>

        <div className="apiButtonsContainer">
          <ApiButton
            class="highRank"
            buttonText="high rank"
            handleMonsties={this.handleArmors}
            currState={highRank}></ApiButton>
          <ApiButton
            class="lowRank"
            buttonText="low rank"
            handleMonsties={this.handleArmors}
            currState={lowRank}></ApiButton>
        </div>
        {armorData.length !== 0 &&
        armorData.length > 2 &&
        Array.isArray(armorData) &&
        !loading ? (
          <div>
            <InputFilter
              filterResults={this.filterArmorResults}
              placeholderText="armor set"></InputFilter>
            <ArmorList armors={armorData}></ArmorList>
            <div className="apiButtonsContainer">
              <ApiButton
                class="highRank"
                buttonText="high rank"
                handleMonsties={this.handleArmors}
                currState={highRank}></ApiButton>
              <ApiButton
                class="lowRank"
                buttonText="low rank"
                handleMonsties={this.handleArmors}
                currState={lowRank}></ApiButton>
            </div>
          </div>
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
    { getHighArmorSets, getLowArmorSets }
  )(Armors)
);
