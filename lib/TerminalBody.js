import React from 'react';
import mergeProps from './mergeProps';

const TerminalBody = (props) => {
  return <div {...mergeProps({
    style: {
      flexGrow: 1
    },
  }, props)}>
    {props.children}
  </div>;
};

export default TerminalBody;
