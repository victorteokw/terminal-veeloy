import React from 'react';
import mergeProps from './mergeProps';

const ButtonSpacer = (props) => (
  <div {...mergeProps({ style: { width: '8px' }}, props)}>
    {props.children}
  </div>
);

export default ButtonSpacer;
