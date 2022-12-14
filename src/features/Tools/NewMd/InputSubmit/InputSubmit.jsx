import React from 'react';

import styles from './InputSubmit.module.css'

class InputSubmit extends React.Component {
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
      <input type='submit' className={styles.submit_button}
      onClick={this.onClickHandler} value={this.props.value} />
    )
  }
};

export default InputSubmit;
