import React from 'react';
import { withRouter } from 'react-router-dom';
import '../Style/InputFilter.css';

const InputFilter = props => {
  return (
    <div className="inputfilter">
      <input
        type="text"
        id="inputEle"
        autoComplete="off"
        onKeyUp={props.filterResults}
        placeholder={`Search for a ${props.placeholderText}`}></input>
    </div>
  );
};

export default withRouter(InputFilter);
