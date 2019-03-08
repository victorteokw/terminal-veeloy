import React from 'react';
import mergeProps from './mergeProps';

const Terminal = (props) => (
  <div {...mergeProps({ style: {
    width: '571px',
    height: '390px',
    position: 'relative',
    backgroundColor: 'black',
    border: '1px solid #868584',
    color: 'white',
    fontFamily: 'Menlo, monospace',
    borderRadius: '6px',
    overflow: 'hidden',
    boxShadow: '0px 20px 80px 0px rgba(0,0,0,0.75)'
  }}, props)}>
    {props.children}
  </div>
);

export default Terminal;
