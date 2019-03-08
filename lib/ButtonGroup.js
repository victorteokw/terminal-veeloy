import React, { useState } from 'react';

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

export default ButtonGroup;
