import React from 'react';
import elementToCode from './elementToCode';
import Tag from '../components/Tag';
import { exampleContainer } from './styles.scss';

const wrapExampleComponent = (example) => () => {
  return <div className={exampleContainer}>
    <Tag>Effect</Tag>
    <div style={{ alignSelf: 'center' }}>{example}</div>
    <Tag>JSX Code</Tag>
    <pre style={{
      alignSelf: 'center',
      padding: '8px',
      marginTop: '20px',
      backgroundColor: '#001628',
      color: '#f5d67b',
      fontSize: '13px',
      lineHeight: 1.75,
      minHeight: '400px',
      overflow: 'scroll',
      width: '571px',
      boxSizing: 'border-box'
    }}>
      <code>
        {elementToCode(React.Children.toArray(example)[0])}
      </code>
    </pre>
    <Tag>Import Code</Tag>
  </div>;
};

export default wrapExampleComponent;
