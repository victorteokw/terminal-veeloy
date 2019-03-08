import React from 'react';
import PropTypes from 'prop-types';
import mergeProps from './mergeProps';
import omitKeys from './omitKeys';

const MinimizeIcon = (props) => (
  <svg {...omitKeys(mergeProps({
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
  }, props), 'pointerAround')}
  >
    <rect fill="#995700" width="8" height="1.1"></rect>
  </svg>
);

MinimizeIcon.propTypes = {
  pointerAround: PropTypes.bool
};

export default MinimizeIcon;
