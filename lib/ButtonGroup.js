import React, { useState } from 'react';
import PropTypes from 'prop-types';

const ButtonGroup = ({ style, className, children }) => {
  const [pointerInside, setPointerInside] = useState(false);
  const defaultStyle = {
    position: 'absolute',
    left: '0',
    display: 'flex',
    flexDirection: 'row'
  };
  return <div
    style={{ ...defaultStyle, ...style }}
    className={className}
    onMouseEnter={() => setPointerInside(true)}
    onMouseLeave={() => setPointerInside(false)}
  >
    {children}
  </div>;
};

ButtonGroup.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
};

export default ButtonGroup;
