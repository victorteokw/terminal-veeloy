import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TitleBar extends Component {

  static propTypes = {
    style: PropTypes.object,
    className: PropTypes.string
  };

  render() {
    const defaultStyle = {
      width: '100%',
      height: '21px',
      position: 'relative',
      borderBottom: '1px solid #191919',
      backgroundImage: 'linear-gradient(#4d4c4b, #464544)',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'center',
      alignItems: 'center'
    };
    const styles = { ...defaultStyle, ...this.props.styles || {}};
    return <div style={styles} className={this.props.className}>
      {this.props.children}
    </div>;
  }

}

export default TitleBar;
