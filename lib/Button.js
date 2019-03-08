import React, { useState, useEffect, cloneElement } from 'react';
import PropTypes from 'prop-types';
import mergeProps from './mergeProps';
import omitKeys from './omitKeys';

const Button = (props) => {
  const [pointerDown, setPointerDown] = useState(false);
  const [tracking, setTracking] = useState(false);
  useEffect(() => {
    const trackingMouseUp = () => {
      setPointerDown(false);
      setTracking(false);
    };
    document.body.addEventListener('mouseup', trackingMouseUp, true);
    return () => {
      document.body.removeEventListener('mouseup', trackingMouseUp, true);
    };
  }, []);
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
  return <div {...omitKeys(mergeProps({
    style: {
      width: '12px',
      height: '12px',
      borderRadius: '6px',
      overflow: 'hidden',
      backgroundColor: backgroundColor(),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none'
    },
    onMouseDown: () => { setTracking(true); setPointerDown(true); },
    onMouseUp: () => { setTracking(false); setPointerDown(false); },
    onMouseEnter: () => { if (tracking) setPointerDown(true); },
    onMouseLeave: () => setPointerDown(false)
  }, props), 'pointerAround', 'disabled', 'close', 'maximize', 'minimize')}
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
  pointerAround: PropTypes.bool,
  disabled: PropTypes.bool,
  close: PropTypes.bool,
  maximize: PropTypes.bool,
  minimize: PropTypes.bool
};

export default Button;
