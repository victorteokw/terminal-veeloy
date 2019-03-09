import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import mergeProps from './mergeProps';
import omitKeys from './omitKeys';

const Cursor = (props) => {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    if (!props.blink) return;
    const handle = setTimeout(() => {
      setVisible(!visible);
    }, props.blinkInterval * 1000);
    return () => {
      clearTimeout(handle);
    };
  });
  const shapeStyles = (() => {
    switch (props.shape) {
      case 'block':
        return { width: '0.5em', height: '1em' };
      case 'underline': {
        return { width: '0.5em', height: '0.1em', marginTop: '0.9em' };
      }
      case 'verticalBar':
      default: {
        return { width: '0.05em', height: '1em' };
      }
    }
  })();
  return <div {...omitKeys(mergeProps({ style: {
    opacity: visible ? '1' : '0',
    backgroundColor: props.color,
    ...shapeStyles
  }}, props), 'shape', 'color', 'blink')}>
  </div>;
};

Cursor.propTypes = {
  shape: PropTypes.oneOf(['block', 'underline', 'verticalBar']).isRequired,
  color: PropTypes.string.isRequired,
  blink: PropTypes.bool.isRequired,
  blinkInterval: PropTypes.number.isRequired
};

Cursor.defaultProps = {
  shape: 'block',
  color: '#8b8b8b',
  blink: false,
  blinkInterval: 0.46
};

export default Cursor;
