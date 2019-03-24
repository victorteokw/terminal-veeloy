import React from 'react';

const DemoMain = ({ children }) => (
  <div style={{
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    
  }}>
    {children}
  </div>
);

export default DemoMain;
