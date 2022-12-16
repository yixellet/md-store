import React from 'react';

import styles from './InputReset.module.css'

class InputReset extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler(event) {
    event.preventDefault();
    this.props.onClickFunction();
  }

  render() {
    return (
      <input type='reset' className={styles.submit_button}
      onClick={this.onClickHandler} value={this.props.value} />
    )
  }
};

export default InputReset;
