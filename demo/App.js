import { hot } from 'react-hot-loader';
import React from 'react';

import Terminal from '../lib/Terminal';
import TitleBar from '../lib/TitleBar';

const App = () => <Terminal>
  <TitleBar title="some title" />
</Terminal>;

export default hot(module)(App);
