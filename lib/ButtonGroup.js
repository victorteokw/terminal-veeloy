import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonGroup extends Component {

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  };

  render() {
    const defaultStyle = {
      position: 'absolute',
      left: '0',
      display: 'flex',
      flexDirection: 'row'
    };
    const styles = { ...defaultStyle, ...this.props.styles || {}};
    return <div style={styles} className={this.props.className}>
      {this.props.children}
    </div>;
  }

}

export default ButtonGroup;
