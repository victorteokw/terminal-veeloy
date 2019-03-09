import React, { useState, useEffect, cloneElement } from 'react';
import mergeProps from './mergeProps';
import mapChildrenRecursively from './mapChildrenRecursively';

const ButtonGroup = (props) => {
  const [pointerInside, setPointerInside] = useState(false);
  const [tracking, setTracking] = useState(false);
  useEffect(() => {
    const trackingMouseUp = () => {
      setTracking(false);
      setPointerInside(false);
    };
    document.body.addEventListener('mouseup', trackingMouseUp, true);
    return () => {
      document.body.removeEventListener('mouseup', trackingMouseUp, true);
    };
  }, []);
  return <div {...mergeProps({
    style: {
      position: 'absolute',
      left: '0',
      display: 'flex',
      flexDirection: 'row'
    },
    onMouseEnter: () => setPointerInside(true),
    onMouseLeave: () => { if (!tracking) setPointerInside(false); },
    onMouseDown: () => setTracking(true),
    onMouseUp: () => { setTracking(false); setPointerInside(true); }
  }, props)}
  >
    {
      mapChildrenRecursively(props.children, (child) => {
        if (child.type.displayName === 'Button') { // TODO: should fix bug here
          return [cloneElement(child, { pointerAround: pointerInside }), false];
        } else {
          return [child, true];
        }
      })
    }
  </div>;
};

export default ButtonGroup;
