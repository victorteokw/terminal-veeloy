import React, { useState, cloneElement } from 'react';
import PropTypes from 'prop-types';

import elementToCode from './elementToCode';

import Tag from './Tag';
import DemoMenu from './DemoMenu';
import DemoMain from './DemoMain';

const DemoList = (props) => {
  const [selected, setSelected] = useState('light');
  const menu = [];
  let main;
  const separateChild = (child) => {
    menu.push(cloneElement(child.props.children[0], {
      selected: selected === child.props.id,
      onClick: () => setSelected(child.props.id),
      key: child.props.id
    }));
    if (selected === child.props.id) {
      main = child.props.children[1];
    }
  };
  React.Children.forEach(props.children, (child) => {
    if (React.Children.count(child) === 2) {
      separateChild(child);
    } else {
      child = React.Children.only(child);
      separateChild(child);
    }
  });
  return [
    <DemoMenu key="menu">{menu}</DemoMenu>,
    <DemoMain key="main">
      <Tag>Effect</Tag>
      <div style={{ alignSelf: 'center' }}>{main}</div>
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
          {elementToCode(React.Children.toArray(main.props.children)[0])}
        </code>
      </pre>
      <Tag>Import Code</Tag>
    </DemoMain>
  ];
};

const DemoItemValidator = (props, propName, componentName) => {
  const prop = props[propName];
  if (false) {
    return new Error(
      'Invalid prop `' + propName + '` supplied to' +
      ' `' + componentName + '`. Validation failed.'
    );
  }
};

DemoList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(DemoItemValidator),
    DemoItemValidator
  ])
};

export default DemoList;
