import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import style from 'react-syntax-highlighter/dist/styles/hljs';
import CleanFragment from './CleanFragment';
import mergeProps from '../../lib/mergeProps';

const HighlightedText = (props) => (
  <SyntaxHighlighter {...mergeProps({ style, PreTag: CleanFragment }, props)}>
    {props.children}
  </SyntaxHighlighter>
);

export default HighlightedText;
