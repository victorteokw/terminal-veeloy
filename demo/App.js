import { hot } from 'react-hot-loader';
import React from 'react';

import Terminal from '../lib/Terminal';
import TitleBar from '../lib/TitleBar';
import ButtonGroup from '../lib/ButtonGroup';
import Button from '../lib/Button';
import ButtonSpacer from '../lib/ButtonSpacer';
import Heading from '../lib/Heading';
import CloseIcon from '../lib/CloseIcon';
import MinimizeIcon from '../lib/MinimizeIcon';
import MaximizeIcon from '../lib/MaximizeIcon';

const App = () => <Terminal>
  <TitleBar>
    <ButtonGroup>
      <ButtonSpacer />
      <Button close>
        <CloseIcon />
      </Button>
      <ButtonSpacer />
      <Button minimize>
        <MinimizeIcon />
      </Button>
      <ButtonSpacer />
      <Button maximize>
        <MaximizeIcon />
      </Button>
      <ButtonSpacer />
    </ButtonGroup>
    <Heading>Terminal</Heading>
  </TitleBar>
</Terminal>;

export default hot(module)(App);
