import React from 'react';
import mergeProps from 'react-merge-props';

const Tag = (props) => (
  <div {...mergeProps({
    style: {
      backgroundColor: 'black',
      color: 'white',
      fontSize: '15px',
      lineHeight: 2,
      paddingLeft: '12px',
      width: '120px',
      fontFamily: '"HelveticaNeue-CondensedBold", \
        "Helvetica Neue", Arial, sans-serif',
      fontWeight: 'bold',
      fontStretch: 'condensed',
      textTransform: 'uppercase',
      float: 'left',
      clear: 'both',
      margin: '24px 0'
    }
  }, props)}>
    {props.children}
  </div>
);

export default Tag;
