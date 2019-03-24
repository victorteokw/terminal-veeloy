import { hot } from 'react-hot-loader';
import React from 'react';

import Header from './Header';
import LightTitleBarDemo from './LightTitleBarDemo';
import DarkTitleBarDemo from './DarkTitleBarDemo';

import DemoList from './DemoList';

const App = () => {
  return <div style={{
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'stretch',
    flexDirection: 'column'
  }}>
    <style>
      body {'{'} margin: 0; {'}'}
    </style>
    <Header />
    <div style={{
      display: 'flex',
      alignItems: 'stretch',
      flexDirection: 'row'
    }}>
    <DemoList>
      {LightTitleBarDemo}
      {DarkTitleBarDemo}
    </DemoList>
    </div>
  </div>;
};

export default hot(module)(App);
