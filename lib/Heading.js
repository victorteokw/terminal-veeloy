import React from 'react';
import PropTypes from 'prop-types';
import mergeProps from './mergeProps';
import omitKeys from './omitKeys';

const Heading = (props) => (
  <div {...omitKeys(mergeProps({ style: {
    color: props.darkMode ? '#ccc8c3' : '#4b4a4a',
    fontFamily: 'Lucida Grande, sans-serif',
    fontSize: '13px',
    userSelect: 'none'
  }}, props), 'darkMode')}>
    {props.children}
  </div>
);

Heading.propTypes = {
  darkMode: PropTypes.bool.isRequired
};

Heading.defaultProps = {
  darkMode: false
};

export default Heading;
