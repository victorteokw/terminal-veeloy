import React from 'react';

const defaultSettings = {
  indentLevel: 1,
  numberOfSpaces: 2,
  oneElementOnEachLine: true
};

const extractSettings = (...args) => {
  if (defaultSettings[Object.keys(args)[0]] !== undefined) {
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

const importList = (...elements) => {
  console.log(elements);
  const requirements = [];
  elements.forEach((element) => {
    if (element.type && element.type.displayName) {
      requirements.push(element.type.displayName);
      if (
        element.props &&
        element.props.children &&
        React.Children.count(element.props.children) > 0
      ) {
        const childImports = importList(
          ...React.Children.toArray(element.props.children)
        );
        childImports.forEach((i) => {
          if (!requirements.includes(i)) {
            requirements.push(i);
          }
        });
      }
    }
  });
  return requirements;
};

const elementToImports = (...args) => {
  const [settings, elements] = extractSettings(...args);
  const {
    indentLevel,
    numberOfSpaces,
    oneElementOnEachLine
  } = settings;
  const list = importList(...elements);
  if (oneElementOnEachLine) {
    return 'import {\n' +
      list.map((item) => `${' '.repeat(indentLevel * numberOfSpaces)}${item}`)
        .join(',\n') + '\n' +
        "} from 'terminal-veeloy';";
  } else {
    return '';
  }
};

export default elementToImports;
