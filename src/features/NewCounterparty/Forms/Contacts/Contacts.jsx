import React from 'react';
import InputText from '../../../Tools/NewMd/InputText/InputText';
import styles from './Contacts.module.css'

function Contacts(props) {
  
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{props.legend}</legend>
      <div>
        
      </div>
      <InputText />
    </fieldset>
  )
};

export default Contacts;
