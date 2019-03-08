import { hot } from 'react-hot-loader';
import React from 'react';

import Terminal from '../lib/Terminal';
import TitleBar from '../lib/TitleBar';
import ButtonGroup from '../lib/ButtonGroup';
import Button from '../lib/Button';
import ButtonSpacer from '../lib/ButtonSpacer';
import Heading from '../lib/Heading';

const App = () => <Terminal>
  <TitleBar>
    <ButtonGroup>
      <ButtonSpacer />
      <Button close />
      <ButtonSpacer />
      <Button minimize />
      <ButtonSpacer />
      <Button maximize />
      <ButtonSpacer />
    </ButtonGroup>
    <Heading>Terminal</Heading>
  </TitleBar>
</Terminal>;

export default hot(module)(App);
