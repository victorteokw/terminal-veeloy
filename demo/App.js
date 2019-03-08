import { hot } from 'react-hot-loader';
import React, { useState } from 'react';

import LightTitleBar from './LightTitleBar';
import DarkTitleBar from './DarkTitleBar';

const App = () => {
  const [tab, setTab] = useState('light');
  return <div style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'row'
  }}>
    <style>
      body {'{'} margin: 0; {'}'}
    </style>
    <nav style={{
      display: 'flex',
      flexDirection: 'column',
      padding: '20px 40px',
      lineHeight: '40px',
      fontFamily: 'monospace',
      borderRight: '1px dashed #dddddd'
    }}>
      <a style={{
        cursor: 'pointer',
        color: tab === 'light' ? 'black' : '#cccccc'
      }} onClick={() => setTab('light')}>
        Light Title Bar
      </a>
      <a style={{
        cursor: 'pointer',
        color: tab === 'dark' ? 'black' : '#cccccc'
      }} onClick={() => setTab('dark')}>
        Dark Title Bar
      </a>
      <a style={{
        cursor: 'pointer',
        color: tab === 'toggle' ? 'black' : '#cccccc'
      }} onClick={() => setTab('toggle')}>
        Toggle Title Bar Color
      </a>
    </nav>
    <div style={{
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{ display: tab === 'light' ? 'block' : 'none' }}>
        <LightTitleBar />
      </div>
      <div style={{ display: tab === 'dark' ? 'block' : 'none' }}>
        <DarkTitleBar />
      </div>
      <div style={{ display: tab === 'toggle' ? 'block' : 'none' }}>
        <DarkTitleBar />
      </div>
    </div>
  </div>;
};

export default hot(module)(App);
