import React from 'react';
import PropTypes from 'prop-types';
import mergeProps from './mergeProps';
import omitKeys from './omitKeys';

const Terminal = (props) => (
  <div {...omitKeys(mergeProps({ style: {
    width: '571px',
    height: '390px',
    position: 'relative',
    backgroundColor: 'black',
    border: `1px solid ${props.darkMode ? '#868584' : '#c8c8c8'}`,
    color: 'white',
    fontFamily: 'Menlo, monospace',
    borderRadius: '6px',
    overflow: 'hidden',
    boxShadow: '0px 20px 80px 0px rgba(0,0,0,0.75)'
  }}, props), 'darkMode')}>
    {props.children}
  </div>
);

Terminal.propTypes = {
  darkMode: PropTypes.bool.isRequired
};

Terminal.defaultProps = {
  darkMode: false
};

export default Terminal;
