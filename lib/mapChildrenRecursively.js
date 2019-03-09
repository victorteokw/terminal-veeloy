import React, { cloneElement } from 'react';

const mapChildrenRecursively = (children, func) => {
  return React.Children.map(children, (child) => {
    const [retval, next] = func(child);
    if (!next) return retval;
    if (!child.props) return retval;
    if (!child.props.children) return retval;
    return cloneElement(child, {
      children: mapChildrenRecursively(child.props.children, func)
    });
  });
};

export default mapChildrenRecursively;
