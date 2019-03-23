import React from 'react';
import PropTypes from 'prop-types';

const DemoBody = ({ display, children }) => (
  <div style={{ display: display ? 'block' : 'none' }}>
    {children}
  </div>
);

DemoBody.propTypes = {
  display: PropTypes.bool.isRequired
};

DemoBody.defaultProps = {
  display: false
};

export default DemoBody;
