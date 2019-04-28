import React from 'react';
import elementToCode from './elementToCode';
import elementToImports from './elementToImports';
import Tag from '../components/Tag';
import CodeBlock from '../components/CodeBlock';
import useTitle from '../useTitle';
import { exampleContainer } from './styles.scss';

const wrapExampleComponent = (example, title) => () => {
  useTitle(title);
  return <div className={exampleContainer}>
    <Tag>Effect</Tag>
    <div style={{ alignSelf: 'center' }}>{example}</div>
    <Tag>JSX Code</Tag>
    <CodeBlock>
      {elementToCode(React.Children.toArray(example)[0])}
    </CodeBlock>
    <Tag>Import Code</Tag>
    <CodeBlock>
      {elementToImports(React.Children.toArray(example)[0])}
    </CodeBlock>
  </div>;
};

export default wrapExampleComponent;
