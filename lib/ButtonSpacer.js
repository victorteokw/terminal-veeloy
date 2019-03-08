import React from 'react';

const ButtonSpacer = ({ style, className, children }) => (
  <div style={{ width: '8px', ...style }} className={className}>
    {children}
  </div>
);

export default ButtonSpacer;
