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

const ScaffoldKit = <TerminalFrame darkMode>
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
    <Heading>Scaffold Kit Terminal</Heading>
  </TitleBar>
  <TerminalBody style={{ backgroundColor: 'black', color: 'white' }}>
    <Text>
      <Text bold>$ </Text>
      <Text>gen-my-server app --server=koa --orm=mongoose</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>      create </Text>
      <Text>.eslintrc.json</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>      create </Text>
      <Text>.gitignore</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>      create </Text>
      <Text>README.md</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>      create </Text>
      <Text>package.json</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>      create </Text>
      <Text>routes.js</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>      create </Text>
      <Text>server.js</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>     install </Text>
      <Text>eslint</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>     install </Text>
      <Text>koa</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>     install </Text>
      <Text>koa-router</Text>
    </Text>
    <br />
    <Text>
      <Text bold>$ </Text>
      <Text>gen-my-server model User email:String name:String age:Int</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>      create </Text>
      <Text>models/User.js</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>      update </Text>
      <Text>server.js</Text>
    </Text>
    <br />
    <Text>
      <Text bold>$ </Text>
      <Text>gen-my-server api users --CRUD</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>      create </Text>
      <Text>controllers/users.js</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>      update </Text>
      <Text>routes.js</Text>
    </Text>
    <br />
    <Text>
      <Text greenBright>      update </Text>
      <Text>server.js</Text>
    </Text>
    <br />
    <Text>
      <Text bold>$ </Text>
      <Text>npm start</Text>
    </Text>
    <Cursor shape='block' blink />
  </TerminalBody>
</TerminalFrame>;

export default ScaffoldKit;
