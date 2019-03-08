import React from 'react';
import PropTypes from 'prop-types';

const MaximizeIcon = (props) => (
  <svg
    x="0px" y="0px"
    viewBox="0 0 6 5.9"
    style={{
      width: '6px',
      height: '6px',
      display: 'block',
      opacity: props.pointerAround ? '1' : '0',
      overflow: 'visible',
      ...props.style
    }}
    className={props.className}
  >
    <path fill="#006400" d="M5.4,0h-4L6,4.5V0.6C5.7,0.6,5.3,0.3,5.4,0z">
    </path>
    <path fill="#006400" d="M0.6,5.9h4L0,1.4l0,3.9C0.3,5.3,0.6,5.6,0.6,5.9z">
    </path>
  </svg>
);

MaximizeIcon.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  pointerAround: PropTypes.bool
};

export default MaximizeIcon;
