import React from 'react';
import mergeProps from './mergeProps';

const TitleBar = (props) => (
  <div {...mergeProps({ style: {
    width: '100%',
    height: '21px',
    position: 'relative',
    borderBottom: '1px solid #191919',
    backgroundImage: 'linear-gradient(#4d4c4b, #464544)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  }}, props)}>
    {props.children}
  </div>
);

export default TitleBar;
