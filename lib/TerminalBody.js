import React from 'react';
import mergeProps from './mergeProps';

const TerminalBody = (props) => {
  return <div {...mergeProps({
    style: {
      flexGrow: 1,
      fontFamily: 'Monaco, Menlo, monospace',
      fontSize: '12px',
      lineHeight: '1.25em',
      padding: '0.25em'
    },
  }, props)}>
    {props.children}
  </div>;
};

export default TerminalBody;
