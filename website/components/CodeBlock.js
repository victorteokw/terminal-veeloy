import React from 'react';
import mergeProps from '../../lib/mergeProps';

const CodeBlock = (props) => (
  <pre {...mergeProps({
    style: {
      alignSelf: 'center',
      padding: '8px',
      marginTop: '20px',
      backgroundColor: '#001628',
      color: '#f5d67b',
      fontSize: '13px',
      lineHeight: 1.75,
      overflow: 'scroll',
      width: '571px',
      boxSizing: 'border-box'
    }
  }, props)}>
    <code>
      {props.children}
    </code>
  </pre>
);

export default CodeBlock;
