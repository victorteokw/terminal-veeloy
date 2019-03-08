import React from 'react';
import mergeProps from './mergeProps';

const MinimizeIcon = (props) => (
  <svg {...mergeProps({
    x: '0px',
    y: '0px',
    viewBox: '0 0 8 1.1',
    style: {
      width: '8px',
      height: '8px',
      display: 'block',
      opacity: props.pointerAround ? '1' : '0',
      overflow: 'visible'
    }
  }, props)}
  >
    <rect fill="#995700" width="8" height="1.1"></rect>
  </svg>
);

export default MinimizeIcon;
