import React from 'react';
import mergeProps from 'react-merge-props';
import copy from './copy.svg';

const CopyIcon = (props) => (
  <img {...mergeProps({
    src: copy,
    style: {
      height: '16px',
      width: '16px',
      cursor: 'pointer'
    }
  }, props)} />
);

export default CopyIcon;
