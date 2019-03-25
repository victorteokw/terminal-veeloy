import { hot } from 'react-hot-loader';
import React from 'react';

import AppLayout from './Layout/AppLayout';
import AppHeader from './Layout/AppHeader';
import AppBody from './Layout/AppBody';

import LightTitleBarDemo from './LightTitleBarDemo';
import DarkTitleBarDemo from './DarkTitleBarDemo';

import DemoList from './DemoList';

const App = () => {
  return <AppLayout>
    <AppHeader />
    <AppBody>
      <DemoList>
        {LightTitleBarDemo}
        {DarkTitleBarDemo}
      </DemoList>
    </AppBody>
  </AppLayout>;
};

export default hot(module)(App);
