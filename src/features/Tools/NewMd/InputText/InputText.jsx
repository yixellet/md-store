import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import styles from './InputText.module.css'

function InputText(props) {
  
  return (
    <div className={styles.input_wrapper}>
      <InputLabel name={props.label} for={props.name} isRequired={props.isRequired} />
      <input type='text' 
             name={props.name} 
             id={props.name} 
             className={styles.text_input}
             value={props.value}
             onChange={event => props.onChangeFunction(event.target.value)} />
    </div>
  )
};

export default InputText;
