import React, { useState, cloneElement } from 'react';
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
    {
      React.Children.map(children, (child) => {
        if (child.type.displayName === 'Button') { // TODO: should fix bug here
          return cloneElement(child, { pointerAround: pointerInside });
        } else {
          return child;
        }
      })
    }
  </div>;
};

ButtonGroup.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
};

export default ButtonGroup;
