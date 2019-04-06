import React from 'react';

import TerminalFrame from '../../lib/TerminalFrame';
import TitleBar from '../../lib/TitleBar';
import ButtonGroup from '../../lib/ButtonGroup';
import Button from '../../lib/Button';
import ButtonSpacer from '../../lib/ButtonSpacer';
import Heading from '../../lib/Heading';
import CloseIcon from '../../lib/CloseIcon';
import MinimizeIcon from '../../lib/MinimizeIcon';
import MaximizeIcon from '../../lib/MaximizeIcon';
import TerminalBody from '../../lib/TerminalBody';
import Text from '../../lib/Text';
import Cursor from '../../lib/Cursor';

const LightTitleBar = <TerminalFrame>
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
  <TerminalBody style={{ backgroundColor: 'white', color: 'black' }}>
    <Text>Last login: Sat Mar  9 12:31:40 on ttys004</Text>
    <br />
    <Text>love-from:terminal-veeloy dear$ </Text>
    <Cursor blink />
  </TerminalBody>
</TerminalFrame>;

export default LightTitleBar;
