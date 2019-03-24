import React from 'react';
import Tag from './Tag';

const DemoMenu = ({ children }) => (
  <nav style={{
    display: 'flex',
    justifyItems: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    padding: '0 12px 24px 0',
    minWidth: '160px',
    borderRight: '1px dashed #dddddd'
  }}>
    <Tag>Examples</Tag>
    <div style={{
      paddingLeft: '12px',
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 2.5,
      fontFamily: 'monospace',
      justifyItems: 'flex-start',
      alignItems: 'flex-start'
    }}>{children}</div>
  </nav>
);

export default DemoMenu;
