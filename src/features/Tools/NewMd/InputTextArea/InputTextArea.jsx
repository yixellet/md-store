import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import styles from './InputTextArea.module.css'

class InputTextArea extends React.Component {
  render() {
    return (
      <div className={styles.input_wrapper}>
        <InputLabel name={this.props.label} for={this.props.name} isRequired={this.props.isRequired} />
        <textarea type='text' 
                  name={this.props.name} 
                  id={this.props.name} 
                  className={styles.text_input}
                  value={this.props.value}
                  onChange={event => this.props.onChangeFunction(event.target.value)} />
      </div>
    )
  }
};

export default InputTextArea;
