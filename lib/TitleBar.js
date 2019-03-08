import React from 'react';
import PropTypes from 'prop-types';
import mergeProps from './mergeProps';
import omitKeys from './omitKeys';

const TitleBar = (props) => (
  <div {...omitKeys(mergeProps({ style: {
    width: '100%',
    height: '21px',
    position: 'relative',
    borderBottom: `1px solid ${props.darkMode ? '#191919' : '#dcdcdc'}`,
    backgroundImage: props.darkMode ?
      'linear-gradient(#4d4c4b, #464544)' :
      'linear-gradient(#e6e5e5, #dbdadb)',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center'
  }}, props), 'darkMode')}>
    {props.children}
  </div>
);

TitleBar.propTypes = {
  darkMode: PropTypes.bool.isRequired
};

TitleBar.defaultProps = {
  darkMode: false
};

export default TitleBar;
