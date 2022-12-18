import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import styles from './InputRadio.module.css'

function InputRadio(props) {
  
  return (
    <div className={styles.input_wrapper}>
      <input type='radio' 
             name={props.name} 
             id={props.value} 
             className={styles.radio_input}
             value={props.value}
             checked={props.isChecked === props.value}
             onChange={event => props.onChangeFunction(event.target.value)} />
      <InputLabel name={props.label} for={props.value} />
    </div>
  )
};

export default InputRadio;
