import React, { useState, useEffect } from 'react';
import mergeProps from './mergeProps';

const MaximizeIcon = (props) => {
  const [altKeyDown, setAltKeyDown] = useState(false);
  useEffect(() => {
    const downCallback = (e) => {
      if (e.keyCode === ALT) setAltKeyDown(true);
    };
    const upCallback = (e) => {
      if (e.keyCode === ALT) setAltKeyDown(false);
    };
    const ALT = 18;
    document.body.addEventListener('keydown', downCallback, true);
    document.body.addEventListener('keyup', upCallback, true);
    return () => {
      document.body.removeEventListener('keydown', downCallback, true);
      document.body.removeEventListener('keyup', upCallback, true);
    };
  }, []);
  return !altKeyDown ? <svg {...mergeProps({
    x: '0px',
    y: '0px',
    viewBox: '0 0 6 5.9',
    style: {
      width: '6px',
      height: '6px'
    }
  }, props)}
  >
    <path fill="#006400" d="M5.4,0h-4L6,4.5V0.6C5.7,0.6,5.3,0.3,5.4,0z">
    </path>
    <path fill="#006400" d="M0.6,5.9h4L0,1.4l0,3.9C0.3,5.3,0.6,5.6,0.6,5.9z">
    </path>
  </svg> : <svg {...mergeProps({
    x: '0px',
    y: '0px',
    viewBox: '0 0 7.9 7.9',
    style: {
      width: '8px',
      height: '8px'
    }
  }, props)}
  >
    <polygon fill="#006400" points="7.9,4.5 7.9,3.4 4.5,3.4 4.5,0 3.4,0 3.4,
3.4 0,3.4 0,4.5 3.4,4.5 3.4,7.9 4.5,7.9 4.5,4.5"></polygon>
  </svg>;
};

export default MaximizeIcon;
