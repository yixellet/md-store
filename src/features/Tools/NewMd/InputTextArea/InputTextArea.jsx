import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import styles from './InputTextArea.module.css'

class InputTextArea extends React.Component {
  render() {
    return (
      <div className={styles.input_wrapper}>
        <InputLabel name={this.props.label} for={this.props.name} />
        <textarea type='text' name={this.props.name} id={this.props.name} className={styles.text_input} />
      </div>
    )
  }
};

export default InputTextArea;
