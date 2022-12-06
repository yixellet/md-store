import React from 'react';

import styles from './InputLabel.module.css'

class InputLabel extends React.Component {
  render() {
    return (
        <label htmlFor={this.props.for} className={styles.label}>{this.props.name}</label>
    )
  }
};

export default InputLabel;
