import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import mergeProps from './mergeProps';
import omitKeys from './omitKeys';
import mapChildrenRecursively from './mapChildrenRecursively';

const TerminalFrame = (props) => (
  <div {...omitKeys(mergeProps({ style: {
    display: 'flex',
    flexDirection: 'column',
    width: '571px',
    height: '390px',
    position: 'relative',
    backgroundColor: props.darkMode ? '#413f3e' : '#ececec',
    border: `1px solid ${props.darkMode ? '#868584' : '#c8c8c8'}`,
    borderRadius: '6px',
    overflow: 'hidden',
    boxShadow: '0px 20px 80px 0px rgba(0,0,0,0.75)'
  }}, props), 'darkMode')}>
    {
      mapChildrenRecursively(props.children, (child) => {
        // TODO: should fix bug here
        if (child.type.displayName === 'TitleBar') {
          return [
            cloneElement(child, {
              darkMode: child.props.darkMode === undefined ?
                props.darkMode :
                child.props.darkMode
            }),
            false
          ];
        } else if (child.type.displayName === 'TerminalBody') {
          // Do not iterate into TerminalBody
          return [child, false];
        } else {
          return [child, true];
        }
      })
    }
  </div>
);

TerminalFrame.propTypes = {
  darkMode: PropTypes.bool
};

TerminalFrame.defaultProps = {
  darkMode: false
};

export default TerminalFrame;
