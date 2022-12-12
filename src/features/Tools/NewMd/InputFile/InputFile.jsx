import React from 'react';
import styles from './InputFile.module.css'

function InputFile(props) {
  
  return (
    <div className={styles.input_wrapper}>
      <input type='file' 
             name={props.name} 
             id={props.name} 
             className={styles.text_input}
             placeholder={props.placeholder} />
    </div>
  )
};

export default InputFile;
