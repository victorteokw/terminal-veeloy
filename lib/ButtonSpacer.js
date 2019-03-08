import React from 'react';
import PropTypes from 'prop-types';

const ButtonSpacer = ({ style, className, children }) => (
  <div style={{ width: '8px', ...style }} className={className}>
    {children}
  </div>
);

ButtonSpacer.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string
};

export default ButtonSpacer;
