import React from 'react';
import PropTypes from 'prop-types';
import mergeProps from 'react-merge-props';
import omitKeys from './omitKeys';

const Heading = (props) => {
  const darkMode = props.darkMode === undefined ? false : props.darkMode;
  return <div {...omitKeys(mergeProps({ style: {
    color: darkMode ? '#ccc8c3' : '#4b4a4a',
    fontFamily: 'Lucida Grande, sans-serif',
    fontSize: '13px',
    userSelect: 'none'
  }}, props), 'darkMode')}>
    {props.children}
  </div>;
};

Heading.propTypes = {
  darkMode: PropTypes.bool
};

export default Heading;
