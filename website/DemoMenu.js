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
    <div>{children}</div>
  </nav>
);

export default DemoMenu;
