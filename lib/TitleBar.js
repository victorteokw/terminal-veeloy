import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import mergeProps from 'react-merge-props';
import omitKeys from './omitKeys';
import mapChildrenRecursively from './mapChildrenRecursively';

const TitleBar = (props) => {
  const darkMode = props.darkMode === undefined ? false : props.darkMode;
  return <div {...omitKeys(mergeProps({ style: {
    width: '100%',
    height: '21px',
    position: 'relative',
    borderBottom: `1px solid ${darkMode ? '#191919' : '#dcdcdc'}`,
    backgroundImage: darkMode ?
      'linear-gradient(#4d4c4b, #464544)' :
      'linear-gradient(#e6e5e5, #dbdadb)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  }}, props), 'darkMode')}>
    {
      mapChildrenRecursively(props.children, (child) => {
        if (!child.type) {
          return [child, false];
        }
        if ([
          'Heading',
          'Button'
        ].includes(child.type.displayName)) {
          return [
            cloneElement(child, {
              darkMode: child.props.darkMode === undefined ?
                darkMode :
                child.props.darkMode
            }),
            false
          ];
        } else {
          return [child, true];
        }
      })
    }
  </div>;
};

TitleBar.propTypes = {
  darkMode: PropTypes.bool
};

export default TitleBar;
