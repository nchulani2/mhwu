import React from 'react';
import '../Style/Loading.css';

const Loading = props => {
  return (
    <div className="loadingPos">
      <div className="loading"></div>
      <div className="loadingText">Waiting for {props.loadingText}</div>
    </div>
  );
};

export default Loading;
