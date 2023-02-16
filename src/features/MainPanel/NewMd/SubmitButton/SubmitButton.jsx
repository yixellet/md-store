import React from 'react';

import styles from './SubmitButton.module.css'

class SubmitButton extends React.Component {
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
      <button className={styles.submit_button}
      onClick={this.onClickHandler}>{this.props.value}</button>
    )
  }
};

export default SubmitButton;
