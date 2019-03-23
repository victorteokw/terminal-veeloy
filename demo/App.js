import { hot } from 'react-hot-loader';
import React from 'react';

import LightTitleBarDemo from './LightTitleBarDemo';
import DarkTitleBarDemo from './DarkTitleBarDemo';

import DemoList from './DemoList';

const App = () => {
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
    <DemoList>
      {LightTitleBarDemo}
      {DarkTitleBarDemo}
    </DemoList>
  </div>;
};

export default hot(module)(App);
