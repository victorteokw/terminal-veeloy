import React from 'react';
import PropTypes from 'prop-types';
import mergeProps from '../../lib/mergeProps';

const Message = (props) => (
  <div {...mergeProps({
    style: {
      position: 'absolute',
      float: 'auto',
      top: 40,
      left: '50%',
      transform: 'translate(-50%, 0)',
      backgroundColor: 'white',
      border: '1px solid black',
      boxShadow: '5px 5px 0 #000',
      height: '40px',
      lineHeight: '40px',
      padding: '0 40px',
      minWidth: '200px',
      textAlign: 'center',
      fontSize: '14px',
      animationName: 'message__animation',
      animationDuration: (props.duration / 1000) + 's',
      animationTimingFunction: 'ease-in-out'
    }
  }, props)}>
    {props.children}
    <style>
      @keyframes message__animation {'{'}
          0% {'{'} top: -45px {'}'}
          5% {'{'} top:  40px {'}'}
         95% {'{'} top:  40px {'}'}
        100% {'{'} top: -45px {'}'}
      {'}'}
    </style>
  </div>
);

Message.propTypes = {
  duration: PropTypes.number.isRequired
};

Message.defaultProps = {
  duration: 3000
};

export default Message;
