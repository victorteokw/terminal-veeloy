import React from 'react';
import mergeProps from 'react-merge-props';

const Block = (props) => (
  <div {...mergeProps({
    style: {
      display: 'inline-block',
      padding: '12px',
      backgroundColor: '#f3f3f3'
    }
  }, props)}>
    {props.children}
  </div>
);

export default Block;
