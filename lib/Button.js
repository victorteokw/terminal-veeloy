import React, { useState, cloneElement } from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const [pointerDown, setPointerDown] = useState(false);
  const backgroundColor = () => {
    if (props.disabled) return '#d0d0d0';
    if (props.close && pointerDown) return '#ff8880';
    if (props.minimize && pointerDown) return '#ffee57';
    if (props.maximize && pointerDown) return '#81f059';
    if (props.close) return '#ff5a52';
    if (props.minimize) return '#e5c02a';
    if (props.maximize) return '#28ce42';
    return '#d0d0d0';
  };
  const defaultStyle = {
    width: '12px',
    height: '12px',
    borderRadius: '6px',
    overflow: 'hidden',
    backgroundColor: backgroundColor(),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const styles = { ...defaultStyle, ...props.styles || {}};
  return <div
    style={styles} className={props.className}
    onMouseDown={() => setPointerDown(true)}
    onMouseUp={() => setPointerDown(false)}
    onMouseLeave={() => setPointerDown(false)}
  >
    {
      React.Children.map(props.children, (child) => {
        if ([
          'CloseIcon',
          'MinimizeIcon',
          'MaximizeIcon'
        ].includes(child.type.displayName)) { // TODO: should fix bug here
          return cloneElement(child, { pointerAround: props.pointerAround });
        } else {
          return child;
        }
      })
    }
  </div>;
};

Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  pointerAround: PropTypes.bool,
  disabled: PropTypes.bool,
  close: PropTypes.bool,
  maximize: PropTypes.bool,
  minimize: PropTypes.bool
};

export default Button;
