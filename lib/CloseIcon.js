import React from 'react';
import mergeProps from './mergeProps';

const CloseIcon = (props) => (
  <svg {...mergeProps({
    x: '0px',
    y: '0px',
    viewBox: '0 0 6.4 6.4',
    style: {
      width: '6px',
      height: '6px',
      opacity: props.pointerAround ? '1' : '0',
      overflow: 'visible'
    }
  }, props)}
  >
    <polygon
      fill="#4d0000"
      points="6.4,0.8 5.6,
0 3.2,2.4 0.8,0 0,0.8 2.4,3.2 0,5.6 0.8,6.4 3.2,4 5.6,6.4 6.4,5.6 4,3.2">
    </polygon>
  </svg>
);

export default CloseIcon;
