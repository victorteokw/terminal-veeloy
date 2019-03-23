import React from 'react';

import Demo from './Demo';
import DemoMenuItem from './DemoMenuItem';
import DemoBody from './DemoBody';
import TerminalFrame from '../lib/TerminalFrame';
import TitleBar from '../lib/TitleBar';
import ButtonGroup from '../lib/ButtonGroup';
import Button from '../lib/Button';
import ButtonSpacer from '../lib/ButtonSpacer';
import Heading from '../lib/Heading';
import CloseIcon from '../lib/CloseIcon';
import MinimizeIcon from '../lib/MinimizeIcon';
import MaximizeIcon from '../lib/MaximizeIcon';
import TerminalBody from '../lib/TerminalBody';
import Cursor from '../lib/Cursor';

const DarkTitleBarDemo = <Demo id="dark">
  <DemoMenuItem>Dark Title Bar</DemoMenuItem>
  <DemoBody>
    <TerminalFrame darkMode>
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
      <TerminalBody style={{ backgroundColor: 'black' }}>
        <Cursor shape="underline" />
      </TerminalBody>
    </TerminalFrame>
  </DemoBody>
</Demo>;

export default DarkTitleBarDemo;
