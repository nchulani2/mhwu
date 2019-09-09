import React from 'react';
import { withRouter } from 'react-router-dom';

const NavSvg = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 174 203">
      <g filter="url(#filter0_d)">
        <path
          fill="#262626"
          fillOpacity="1"
          d="M13.041 148.979l-.386-138.392 149.994 1.371-2.094 137.336-14.891 20.891-15.685 20.888-12.8-16.21-12.05-16.209-36.75-.085L55.68 174.72l-12.7 16.152-15.814-20.949-14.125-20.944z"
        />
        <path
          stroke="#fff"
          strokeOpacity="0.3"
          strokeWidth="1"
          d="M13.041 148.979l-.386-138.392 149.994 1.371-2.094 137.336-14.891 20.891-15.685 20.888-12.8-16.21-12.05-16.209-36.75-.085L55.68 174.72l-12.7 16.152-15.814-20.949-14.125-20.944z"
        />
      </g>
      <defs>
        <filter
          id="filter0_d"
          width="172.354"
          height="202.293"
          x="0.651"
          y="0.234"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="5" />
          <feColorMatrix values="0 0 0 0 0.811765 0 0 0 0 0.937255 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
export default withRouter(NavSvg);
