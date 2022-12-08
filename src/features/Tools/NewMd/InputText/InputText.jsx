import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import styles from './InputText.module.css'

function InputText(props) {
  
  return (
    <div className={styles.input_wrapper}>
      <InputLabel name={props.label} for={props.name} />
      <input type='text' name={props.name} id={props.name} className={styles.text_input} />
    </div>
  )
};

export default InputText;
