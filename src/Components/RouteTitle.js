import React from 'react';
import '../Style/RouteTitle.css';

const RouteTitle = props => {
  return (
    <div
      className="routeTitle animated fadeIn faster"
      style={{ top: props.topAmount }}>
      {props.titleText}
    </div>
  );
};
export default RouteTitle;
