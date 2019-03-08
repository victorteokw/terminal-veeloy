import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ButtonSpacer extends Component {

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  };

  render() {
    const defaultStyle = {
      width: '8px'
    };
    const styles = { ...defaultStyle, ...this.props.styles || {}};
    return <div style={styles} className={this.props.className}>
      {this.props.children}
    </div>;
  }

}

export default ButtonSpacer;
