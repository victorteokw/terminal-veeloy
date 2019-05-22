import React, { useState } from 'react';
import Portal from 'react-functional-portal';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import useTitle from '../useTitle';
import Tag from '../components/Tag';
import Article from '../components/Article';
import Block from '../components/Block';
import CopyIcon from '../components/CopyIcon';
import Message from '../components/Message';
import HighlightedText from '../components/HighlightedText';

const InstallationPage = ({}) => {
  useTitle('Installation');
  const [copied, setCopied] = useState(false);
  const importString = "import { TerminalFrame, TerminalBody } \
from 'terminal-veeloy';";
  const requireString = "const { Heading, TitleBar } \
= require('terminal-veeloy/common');";
  return <div>
    <Tag>Installation</Tag>
    <Article>
      <p>
        Install <code>terminal-veeloy</code> with <code>npm</code>.
      </p>
      <Block>
        <code>
          npm i terminal-veeloy -s
        </code>
      </Block>
      <CopyToClipboard text='npm i terminal-veeloy -s' onCopy={() => {
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 1200);
      }}>
        <CopyIcon style={{
          verticalAlign: 'top',
          marginLeft: '4px',
          marginTop: '2px'
        }} />
      </CopyToClipboard>
      <p>If you are using webpack,
you can just require these files by importing:</p>
      <Block>
        <HighlightedText language='javascript'>
          {importString}
        </HighlightedText>
      </Block>
      <CopyToClipboard
        text={importString}
        onCopy={() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1200);
        }}>
        <CopyIcon style={{
          verticalAlign: 'top',
          marginLeft: '4px',
          marginTop: '2px'
        }} />
      </CopyToClipboard>
      <p>
        If you are using CommonJS Module, you should require files like this:
      </p>
      <Block>
        <HighlightedText language='javascript'>
          {requireString}
        </HighlightedText>
      </Block>
      <CopyToClipboard
        text={requireString}
        onCopy={() => {
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 1200);
        }}>
        <CopyIcon style={{
          verticalAlign: 'top',
          marginLeft: '4px',
          marginTop: '2px'
        }} />
      </CopyToClipboard>
      <p>See <u>examples</u> for detailed terminal UI emulator usage.</p>
    </Article>
    {copied ? <Portal><Message duration={1200}>Copied</Message></Portal> : null}
  </div>;
};

export default InstallationPage;
