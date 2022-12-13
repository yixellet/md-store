import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import styles from './InputTextWithButton.module.css'

function InputTextWithButton(props) {

  const onClickHandler = (event) => {
    event.preventDefault();
    this.props.onClickFunction();
  }
  
  return (
    <div className={styles.input_wrapper}>
    <InputLabel name={props.label} for={props.name} isRequired={props.isRequired} />
      <div className={styles.input_with_button_wrapper}>
        <input type='text' 
              name={props.name} 
              id={props.name} 
              className={styles.text_input}
              value={props.value}
              onChange={event => props.onChangeFunction(event.target.value)} />
        <button className={styles.plus_button}
        onClick={onClickHandler}>+</button>
      </div>
    </div>
  )
};

export default InputTextWithButton;
