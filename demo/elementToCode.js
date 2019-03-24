import React from 'react';

const propList = (element) => {
  return Object.keys(element.props).map((key) => {
    if (key === 'children') return '';
    const value = element.props[key];
    if (element.type.defaultProps &&
        (value === element.type.defaultProps[key])) {
      return '';
    }
    switch (typeof value) {
      case 'boolean':
        return value ? ` ${key}` : '';
      case 'string':
        return ` ${key}="${value}"`; // TODO: escape
      default:
        return ` ${key}={${JSON.stringify(value)}}`;
    }
  }).join('');
};

const elementToCode = (...elements) => {
  let indentSetting = {
    indentLevel: 0,
    numberOfSpaces: 2
  };
  if (elements[elements.length - 1].indentLevel !== undefined) {
    indentSetting = elements[elements.length - 1];
    elements = elements.slice(0, elements.length - 1);
  }
  const { indentLevel, numberOfSpaces } = indentSetting;
  return elements.map((element) => {
    if (!(element.type && element.props)) {
      switch (typeof element) {
        case 'string':
          return ' '.repeat(indentLevel * numberOfSpaces) + element + '\n';
        default:
          return ' '.repeat(indentLevel * numberOfSpaces) +
            `{${JSON.stringify(element)}}\n`;
      }
    }
    const displayName = element.type.displayName || element.type;
    if (React.Children.count(element.props.children) === 0) {
      return `${' '.repeat(indentLevel * numberOfSpaces)}` +
        `<${displayName}${propList(element)} />\n`;
    }
    return ' '.repeat(indentLevel * numberOfSpaces) +
      `<${displayName}${propList(element)}>\n` +
      elementToCode(
        ...React.Children.toArray(element.props.children),
        { indentLevel: indentLevel + 1, numberOfSpaces }
      ) +
      ' '.repeat(indentLevel * numberOfSpaces) + `</${displayName}>\n`;
  }).join('');
};

export default elementToCode;
