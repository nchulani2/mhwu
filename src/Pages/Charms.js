import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCharms } from 'src/Actions';
import RouteTitle from 'src/Components/RouteTitle';
import Loading from 'src/Components/Loading';
import CharmsList from 'src/Components/Charms/CharmsList';
import InputFilter from 'src/Components/InputFilter';

class Charms extends Component {
  filterCharms = () => {
    var inputVal, list, link, textValue;
    //   Value from user input to be
    inputVal = document.getElementById('inputEle').value.toUpperCase();
    // grid List
    list = document.querySelector('.charmGrid');
    //   Each link
    link = list.getElementsByClassName('filterCharms');

    for (let i = 0; i < link.length; i++) {
      //   getting the area where details is represented in the DOM, if no need, just get the inner contents
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
  componentDidMount = () => {
    this.props.getCharms();
  };
  render() {
    const { charmData, loading } = this.props.data;

    return (
      <div
        style={{
          width: '100%',
          height: loading ? '100vh' : '100%',
          padding: loading ? '0px' : '80px 0px'
        }}>
        <RouteTitle titleText="Charms"></RouteTitle>

        {charmData.length !== 0 && charmData.length > 2 && !loading ? (
          <div>
            <InputFilter
              placeholderText="charm"
              filterResults={this.filterCharms}></InputFilter>
            <CharmsList charms={charmData}></CharmsList>
          </div>
        ) : (
          <Loading loadingText="charms"></Loading>
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
    { getCharms }
  )(Charms)
);
