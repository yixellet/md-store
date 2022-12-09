import React from 'react';
import { useDispatch } from 'react-redux';
import { setPersonFieldValue } from '../../../../store/reducers/newCpSlice';
import InputLabel from '../InputLabel/InputLabel';
import styles from './InputText.module.css'

function InputText(props) {
  const dispatch = useDispatch();
  
  return (
    <div className={styles.input_wrapper}>
      <InputLabel name={props.label} for={props.name} />
      <input type='text' 
             name={props.name} 
             id={props.name} 
             className={styles.text_input}
             onChange={(event) => {dispatch(setPersonFieldValue({id: props.id, value: event.target.value}))}} />
    </div>
  )
};

export default InputText;
