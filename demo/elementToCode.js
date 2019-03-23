import React from 'react';

const propList = (element) => {
  return Object.keys(element.props).map((key) => {
    if (key === 'children') return '';
    const value = element.props[key];
    switch (typeof value) {
      case 'boolean':
        return ` ${key}`;
      case 'string':
        return ` ${key}='${value}'`; // TODO: escape
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
    if (React.Children.count(element.props.children) === 0) {
      return `${indentLevel * numberOfSpaces}` +
        `<${element.type.displayName}${propList(element)} />\n`;
    }
    return `${indentLevel * numberOfSpaces}` +
      `<${element.type.displayName}${propList(element)}>\n` +
      elementToCode(
        ...React.children.toArray(element.props.children),
        { indentLevel: indentLevel + 1, numberOfSpaces }
      ) +
      `${indentLevel * numberOfSpaces}</${element.type.displayName}>\n`;
  }).join('');
};

export default elementToCode;
