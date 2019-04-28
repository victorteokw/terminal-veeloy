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
      height: '8px'
    }
  }, props), 'fillColor')}
  >
    <rect fill={props.fillColor} width="8" height="1.1"></rect>
  </svg>
);

MinimizeIcon.propTypes = {
  fillColor: PropTypes.string
};

MinimizeIcon.defaultProps = {
  fillColor: '#995700'
};

export default MinimizeIcon;
