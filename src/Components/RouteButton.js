import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../Style/RouteButton.css';

const RouteButton = props => {
  return (
    <Link
      className="animated flipInX faster"
      to={`/${props.buttonLink}`}
      style={{
        margin: props.margin,
        cursor: 'pointer',
        animationDelay: props.animDelay
      }}>
      <button
        className="button"
        style={{
          background: props.background,
          padding: props.padding,
          letterSpacing: props.letterSpacing,
          fontSize: props.fontSize
        }}>
        {props.buttonText}
      </button>
    </Link>
  );
};

export default withRouter(RouteButton);
