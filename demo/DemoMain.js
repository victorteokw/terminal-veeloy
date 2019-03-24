import React from 'react';

const DemoMain = ({ children }) => (
  <div style={{
    boxSizing: 'border-box',
    flexGrow: 1,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    overflow: 'scroll'
  }}>
    {children}
  </div>
);

export default DemoMain;
