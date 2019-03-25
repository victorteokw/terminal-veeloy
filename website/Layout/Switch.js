import React from 'react';
import PropTypes from 'prop-types';

const Switch = ({ value, children }) => {
  children = React.Children.toArray(children);
  let nonMatched = null;
  for (const child of children) {
    if (child.type.displayName === 'Case' && child.props.value === value) {
      return child;
    }
    if (child.type.displayName === 'Default') {
      nonMatched = child;
    }
  }
  return nonMatched;
};

const CaseValidator = (props, propName, componentName) => {
  const prop = props[propName];
  if (Array.isArray(prop)) {
    for (const item of prop) {
      CaseValidator({ [propName]: item }, propName, componentName);
    }
  } else {
    if (!['Case', 'Default'].includes(prop.type.displayName)) {
      throw new Error(
        'Invalid prop `' + propName + '` supplied to' +
        ' `' + componentName + '`. Only accepts `Case` and `Default`.' +
        ' Validation failed.'
      );
    }
  }
};

Switch.propTypes = {
  value: PropTypes.any,
  children: CaseValidator
};

export default Switch;
