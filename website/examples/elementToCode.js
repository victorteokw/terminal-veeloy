import React from 'react';

const toObjectLiteral = (value) => {
  if (Array.isArray(value)) {
    return '[' + value.map((v) => toObjectLiteral(v)).join(', ') + ']';
  }
  if (value === null) {
    return 'null';
  }
  switch (typeof value) {
    case 'string':
      return `'${value}'`;
    case 'number':
      return value;
    case 'boolean':
      return value;
    case 'object':
      return '{ ' + Object.keys(value).map(
        (k) => `${toObjectLiteral(k)}: ${toObjectLiteral(value[k])}`
      ).join(', ') + ' }';
  }
};

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
        return ` ${key}='${value}'`; // TODO: escape
      default:
        return ` ${key}={${toObjectLiteral(value)}}`;
    }
  }).join('');
};

const defaultSettings = {
  indentLevel: 0,
  numberOfSpaces: 2,
  oneLineTextNode: true
};

const extractSettings = (...args) => {
  if (defaultSettings[Object.keys(args[args.length - 1])[0]] !== undefined) {
    const settings = args[args.length - 1];
    Object.keys(defaultSettings).forEach((key) => {
      if (settings[key] === undefined) {
        settings[key] = defaultSettings[key];
      }
    });
    return [settings, args.slice(0,args.length - 1)];
  } else {
    return [defaultSettings, args];
  }
};

const elementToCode = (...args) => {
  const [settings, elements] = extractSettings(...args);
  const { indentLevel, numberOfSpaces, oneLineTextNode } = settings;
  return elements.map((element) => {
    if (!(element.type && element.props)) {
      switch (typeof element) {
        case 'string': {
          if (element.endsWith(' ') || element.startsWith(' ')) {
            element = '{\'' + element + '\'}';
          }
          return ' '.repeat(indentLevel * numberOfSpaces) + element + '\n';
        }
        default:
          return ' '.repeat(indentLevel * numberOfSpaces) +
            `{${toObjectLiteral(element)}}\n`;
      }
    }
    const displayName = element.type.displayName || element.type;
    if (React.Children.count(element.props.children) === 0) {
      return `${' '.repeat(indentLevel * numberOfSpaces)}` +
        `<${displayName}${propList(element)} />\n`;
    }
    if (oneLineTextNode) {
      if (React.Children.count(element.props.children) === 1) {
        const child = React.Children.toArray(element.props.children)[0];
        if (!child.props && !child.type) {
          return `${' '.repeat(indentLevel * numberOfSpaces)}` +
            `<${displayName}${propList(element)}>` +
            String(child) +
            `</${displayName}>\n`;
        }
      }
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
