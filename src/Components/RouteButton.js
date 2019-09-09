import React from 'react';
import { Link } from 'react-router-dom';
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
      <button className="button" style={{ background: props.background }}>
        {props.buttonText}
      </button>
    </Link>
  );
};

export default RouteButton;