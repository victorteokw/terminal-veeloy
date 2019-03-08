import React from 'react';
import mergeProps from './mergeProps';

const Heading = (props) => (
  <div {...mergeProps({ style: {
    color: '#ccc8c3',
    fontFamily: 'Lucida Grande, sans-serif',
    fontSize: '13px',
    userSelect: 'none'
  }}, props)}>
    {props.children}
  </div>
);

export default Heading;
