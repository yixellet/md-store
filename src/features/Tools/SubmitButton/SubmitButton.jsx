import React from 'react';

import styles from './SubmitButton.module.css'

class SubmitButton extends React.Component {
  render() {
    return (
      <input type="submit" className={styles.submit_button} value={this.props.value} />
    )
  }
};

export default SubmitButton;
