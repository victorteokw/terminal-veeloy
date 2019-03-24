import React from 'react';

const DemoMenu = ({ children }) => (
  <nav style={{
    display: 'flex',
    flexDirection: 'column',
    padding: '26px',
    lineHeight: '40px',
    fontFamily: 'monospace',
    borderRight: '1px dashed #dddddd'
  }}>
    {children}
  </nav>
);

export default DemoMenu;
