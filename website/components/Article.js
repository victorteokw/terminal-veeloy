import React from 'react';
import mergeProps from 'react-merge-props';

const Article = (props) => (
  <article {...mergeProps({
    style: {
      clear: 'both',
      paddingLeft: '12px',
      paddingRight: '12px'
    }
  }, props)}>
    {props.children}
  </article>
);

export default Article;
