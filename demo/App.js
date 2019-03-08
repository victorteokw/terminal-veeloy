import { hot } from 'react-hot-loader';
import React, { useState } from 'react';

import LightTitleBar from './LightTitleBar';
import DarkTitleBar from './DarkTitleBar';

const App = () => {
  const [tab, setTab] = useState('dark');
  return <div>
    <nav style={{
      height: '40px',
      lineHeight: '40px',
      fontFamily: 'monospace',
      marginBottom: '8px'
    }}>
      <a style={{
        cursor: 'pointer',
        marginRight: '20px',
        color: tab === 'dark' ? 'black' : '#cccccc'
      }} onClick={() => setTab('dark')}>
        Dark Title Bar
      </a>
      <a style={{
        cursor: 'pointer',
        marginRight: '20px',
        color: tab === 'light' ? 'black' : '#cccccc'
      }} onClick={() => setTab('light')}>
        Light Title Bar
      </a>
      <a style={{
        cursor: 'pointer',
        color: tab === 'toggle' ? 'black' : '#cccccc'
      }} onClick={() => setTab('toggle')}>
        Toggle Title Bar Color
      </a>
    </nav>
    <div style={{ display: tab === 'light' ? 'block' : 'none' }}>
      <LightTitleBar />
    </div>
    <div style={{ display: tab === 'dark' ? 'block' : 'none' }}>
      <DarkTitleBar />
    </div>
    <div style={{ display: tab === 'toggle' ? 'block' : 'none' }}>
      <DarkTitleBar />
    </div>
  </div>;
};

export default hot(module)(App);
