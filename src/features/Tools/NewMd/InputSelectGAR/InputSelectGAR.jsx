import React from 'react';
import InputLabel from '../InputLabel/InputLabel';
import styles from './InputSelectGAR.module.css'

function InputSelectGAR(props) {

  const handleChange = (value) => {
    const chosenOption = props.options.find((option) => {
      return option.id == value;
    });
    props.onChangeFunction(chosenOption);
  };

  return (
    <div className={styles.input_wrapper}>
      <InputLabel name={props.label} 
                  for={props.name} 
                  isRequired={props.isRequired} />
      <select name={props.name} 
              id={props.name}
              className={styles.comboBox} 
              value={props.value.id} 
              onChange={event => handleChange(event.target.value)}>
        <option key={-999} value={-999} disabled>{props.placeholder}</option>
        {
          props.options &&
          Object.values(props.options).map((option) => {
            return <option key={option.id} value={option.id}>{option.name}</option>
          })
        }
      </select>
    </div>
  )
};

export default InputSelectGAR;
