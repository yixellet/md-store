import React from 'react';
import InputLabel from '../InputLabel/InputLabel';

import styles from './InputDate.module.css'

class InputDate extends React.Component {
  render() {
    return (
      <div className={styles.input_wrapper}>
        <InputLabel name={this.props.label} for={this.props.name} />
        <input type='date' name={this.props.name} id={this.props.name} className={styles.text_input} />
      </div>
    )
  }
};

export default InputDate;
