import React from 'react';
import { render } from 'react-dom';

import Terminal from '../lib/Terminal';
import TitleBar from '../lib/TitleBar';

const container = document.createElement('div');
container.id = 'container';
document.body.appendChild(container);
render(
  <Terminal>
    <TitleBar title="some title" />
  </Terminal>,
  container
);
