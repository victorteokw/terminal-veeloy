import React from 'react';
import PropTypes from 'prop-types';

const DemoMenuItem = ({ selected, onClick, children }) => (
  <a style={{
    cursor: 'pointer',
    color: selected ? '#000000' : '#cccccc'
  }} onClick={onClick}>
    {children}
  </a>
);

DemoMenuItem.propTypes = {
  selected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

DemoMenuItem.defaultProps = {
  selected: false,
  onClick: () => {}
};

export default DemoMenuItem;
