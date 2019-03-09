import React, { useState, useEffect, cloneElement } from 'react';
import PropTypes from 'prop-types';
import mergeProps from './mergeProps';
import omitKeys from './omitKeys';
import mapChildrenRecursively from './mapChildrenRecursively';

const Button = (props) => {
  const darkMode = props.darkMode === undefined ? false : props.darkMode;
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
  const borderColor = () => {
    if (props.disabled) return '#b1b1b1';
    if (props.close && pointerDown) return '#bf4943';
    if (props.minimize && pointerDown) return '#bf9123';
    if (props.maximize && pointerDown) return '#1f9a31';
    if (props.close) return '#ff5f57';
    if (props.minimize) return '#ffbd2e';
    if (props.maximize) return '#28c940';
  };
  const backgroundColor = () => {
    if (props.disabled) return '#d0d0d0';
    if (darkMode && props.close && pointerDown) return '#ff8880';
    if (darkMode && props.minimize && pointerDown) return '#ffee57';
    if (darkMode && props.maximize && pointerDown) return '#81f059';
    if (darkMode && props.close) return '#ff5a52';
    if (darkMode && props.minimize) return '#e5c02a';
    if (darkMode && props.maximize) return '#28ce42';
    if (props.close && pointerDown) return '#c04843';
    if (props.minimize && pointerDown) return '#bf8f22';
    if (props.maximize && pointerDown) return '#1f9c31';
    if (props.close) return '#ff635b';
    if (props.minimize) return '#ffbe2f';
    if (props.maximize) return '#29cd43';
    return '#d0d0d0';
  };
  return <div {...omitKeys(mergeProps({
    style: {
      width: '12px',
      height: '12px',
      boxSizing: 'border-box',
      border: darkMode ? undefined : `1px solid ${borderColor()}`,
      borderRadius: '6px',
      overflow: 'hidden',
      backgroundColor: backgroundColor(),
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      pointerEvents: props.disabled ? 'none' : 'auto'
    },
    onMouseDown: () => { setTracking(true); setPointerDown(true); },
    onMouseUp: () => { setTracking(false); setPointerDown(false); },
    onMouseEnter: () => { if (tracking) setPointerDown(true); },
    onMouseLeave: () => setPointerDown(false)
  }, props),
  'pointerAround', 'disabled', 'close', 'maximize', 'minimize', 'darkMode')}
  >
    {
      mapChildrenRecursively(props.children, (child) => {
        if ([
          'CloseIcon',
          'MinimizeIcon',
          'MaximizeIcon'
        ].includes(child.type.displayName)) { // TODO: should fix bug here
          return [cloneElement(
            child,
            {
              style: {
                opacity: props.disabled ? '0' : props.pointerAround ? '1' : '0',
                ...child.props.style
              }
            }
          ), false];
        } else {
          return [child, true];
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
  minimize: PropTypes.bool,
  darkMode: PropTypes.bool
};

export default Button;
