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

const BlackAndWhite = <TerminalFrame darkMode>
  <TitleBar>
    <ButtonGroup>
      <ButtonSpacer />
      <Button close style={{ backgroundColor: '#eee' }}>
        <CloseIcon fillColor="#333" />
      </Button>
      <ButtonSpacer />
      <Button minimize style={{ backgroundColor: '#bbb' }}>
        <MinimizeIcon fillColor="#333" />
      </Button>
      <ButtonSpacer />
      <Button maximize style={{ backgroundColor: '#888' }}>
        <MaximizeIcon fillColor="#333" />
      </Button>
      <ButtonSpacer />
    </ButtonGroup>
    <Heading>404 - Page Not Found</Heading>
  </TitleBar>
  <TerminalBody style={{ backgroundColor: 'black', color: 'white' }}>
    <Text>
      <span style={{
        display: 'block',
        margin: 10,
        textAlign: 'center',
        lineHeight: '30px',
        fontSize: 20
      }}>Warning: Navigation Error!</span>
    </Text>
    <br />
    <Text>                                 /`·.¸</Text><br />
    <Text>                                /¸...¸`:·</Text><br />
    <Text>                            ¸.·´  ¸   `·.¸.·´)</Text><br />
    <Text>                            : © ):´;      ¸  {'{'}</Text><br />
    <Text>                              `·.¸ `·  ¸.·´\`·¸)</Text><br />
    <Text>                                  `\\´´\¸.·´</Text><br />
    <br />
    <br />
    <br />
    <Text>             Feel free to click the links above and navigate back.</Text>
    <Cursor blink />
  </TerminalBody>
</TerminalFrame>;

export default BlackAndWhite;
