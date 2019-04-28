import React from 'react';
import mergeProps from '../../lib/mergeProps';

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
